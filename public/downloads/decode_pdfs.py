import base64, os, glob
src = r"D:\AI-APP\inframind-website\public\downloads\b64"
dst = r"D:\AI-APP\inframind-website\public\downloads"
for b64file in glob.glob(os.path.join(src, "*.b64")):
    fname = os.path.basename(b64file).replace(".b64", "")
    with open(b64file, "r") as f:
        b64 = f.read().strip()
    out = os.path.join(dst, fname)
    with open(out, "wb") as f:
        f.write(base64.b64decode(b64))
    print(f"OK: {fname} ({os.path.getsize(out):,} bytes)")
print("All done.")
