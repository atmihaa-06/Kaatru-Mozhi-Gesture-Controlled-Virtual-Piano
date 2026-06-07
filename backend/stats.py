import json
import os

DATA_FILE = "stats_data.json"

note_stats = {}


def save_stats():

    most_played = None

    if note_stats:
        most_played = max(
            note_stats,
            key=note_stats.get
        )

    data = {
        "total_notes": sum(note_stats.values()),
        "most_played": most_played,
        "note_stats": note_stats
    }

    with open(DATA_FILE, "w") as file:
        json.dump(data, file, indent=4)


def update_stats(note):

    if note not in note_stats:
        note_stats[note] = 0

    note_stats[note] += 1

    save_stats()


def get_most_played():

    if not note_stats:
        return None

    return max(
        note_stats,
        key=note_stats.get
    )


def get_total_notes():

    return sum(note_stats.values())


def get_all_stats():

    return note_stats