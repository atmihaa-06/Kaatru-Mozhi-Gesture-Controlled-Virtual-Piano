note_stats = {}


def update_stats(note):

    if note not in note_stats:

        note_stats[note] = 0

    note_stats[note] += 1


def get_most_played():

    if not note_stats:
        return None

    return max(
        note_stats,
        key=note_stats.get
    )