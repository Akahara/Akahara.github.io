import os
import PIL.Image
import shutil

"""
Tiny script to take images in assets_original/ and thumbnails_original/ and
reduce them to the sizes they will be displayed at on the web page.
"""

THUMBNAIL_SIZE = (256, 128)
# ASSET_SIZE = (1024, 1024)
ASSET_SIZE = (580, 700)

for filename in os.listdir("thumbnails_original"):
    print(filename)
    img = PIL.Image.open("thumbnails_original/" + filename)
    original_size = img.size
    img.thumbnail(THUMBNAIL_SIZE)
    print('thumbnails/', filename, original_size, img.size)
    img.save("thumbnails/" + filename.replace(".jpg", ".png").replace(".jpeg", ".png"))

for filename in os.listdir("assets_original"):
    if not filename.endswith(".png") and not filename.endswith(".jpg") and not filename.endswith(".jpeg"):
        shutil.copy("assets_original/" + filename, "assets/" + filename)
        continue
    img = PIL.Image.open("assets_original/" + filename)
    original_size = img.size
    img.thumbnail(ASSET_SIZE)
    print('assets/', filename, original_size, img.size)
    img.save("assets/" + filename)