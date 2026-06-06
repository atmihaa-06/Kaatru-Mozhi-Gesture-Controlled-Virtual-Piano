import pygame

pygame.mixer.init()

sounds = {}

NOTES = [
    "C", "C#",
    "D", "D#",
    "E",
    "F", "F#",
    "G", "G#",
    "A", "A#",
    "B"
]

for note in NOTES:
    sounds[note] = pygame.mixer.Sound(
        f"sounds/{note}.wav"
    )


def play_note(note):

    if note in sounds:
        sounds[note].play()