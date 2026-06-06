# ==========================
# Piano Heatmap Analytics
# ==========================

NOTES = [
    "C", "C#",
    "D", "D#",
    "E",
    "F", "F#",
    "G", "G#",
    "A", "A#",
    "B"
]

# Store hit counts
hits = {
    note: 0
    for note in NOTES
}


def register_hit(note):
    """
    Increase count when a note is played.
    """

    if note in hits:
        hits[note] += 1


def get_hits():
    """
    Return all note hit counts.
    """

    return hits


def get_total_hits():
    """
    Total notes played.
    """

    return sum(hits.values())


def get_most_used_note():
    """
    Most frequently played note.
    """

    if get_total_hits() == 0:
        return None

    return max(
        hits,
        key=hits.get
    )


def reset_heatmap():
    """
    Reset all statistics.
    """

    global hits

    hits = {
        note: 0
        for note in NOTES
    }


def print_heatmap():
    """
    Console display of heatmap.
    """

    print("\n===== HEATMAP =====")

    for note, count in hits.items():

        print(
            f"{note:<3} : "
            f"{count}"
        )

    print(
        "\nMost Used Note:",
        get_most_used_note()
    )

    print(
        "Total Notes Played:",
        get_total_hits()
    )