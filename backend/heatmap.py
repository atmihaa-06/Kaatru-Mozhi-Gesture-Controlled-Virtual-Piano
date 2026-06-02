NOTES = [
    "C","C#","D","D#","E",
    "F","F#","G","G#","A",
    "A#","B"
]

key_hits = {}

for note in NOTES:
    key_hits[note] = 0


def register_hit(note):

    if note in key_hits:
        key_hits[note] += 1


def get_hits(note):

    return key_hits.get(note, 0)