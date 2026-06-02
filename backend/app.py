import cv2


def main():
    cap = cv2.VideoCapture(0)

    if not cap.isOpened():
        print("Error: Could not access webcam.")
        return

    print("Webcam started. Press 'q' to quit.")

    while True:
        success, frame = cap.read()

        if not success:
            print("Failed to read frame.")
            break

        cv2.imshow("Kaatru-Mozhi Camera Feed", frame)

        if cv2.waitKey(1) & 0xFF == ord('q'):
            break

    cap.release()
    cv2.destroyAllWindows()


if __name__ == "__main__":
    main()