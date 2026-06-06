import cv2

selected_points = []


def mouse_callback(event, x, y, flags, param):
    global selected_points

    if event == cv2.EVENT_LBUTTONDOWN:

        if len(selected_points) < 4:
            selected_points.append((x, y))

            print(
                f"Corner {len(selected_points)} selected: ({x}, {y})"
            )


def calibrate_surface(frame):

    global selected_points

    selected_points = []

    cv2.namedWindow("Calibration")
    cv2.setMouseCallback(
        "Calibration",
        mouse_callback
    )

    while True:

        temp = frame.copy()

        for point in selected_points:

            cv2.circle(
                temp,
                point,
                8,
                (0, 255, 0),
                -1
            )

        if len(selected_points) > 1:

            for i in range(len(selected_points) - 1):

                cv2.line(
                    temp,
                    selected_points[i],
                    selected_points[i + 1],
                    (255, 0, 0),
                    2
                )

        cv2.putText(
            temp,
            f"Select Corner {len(selected_points)+1}/4",
            (20, 40),
            cv2.FONT_HERSHEY_SIMPLEX,
            1,
            (0, 255, 255),
            2
        )

        cv2.imshow(
            "Calibration",
            temp
        )

        key = cv2.waitKey(1)

        if len(selected_points) == 4:
            break

        if key == 27:
            break

    cv2.destroyWindow("Calibration")

    return selected_points