import fitz
import os
import sys

downloads = r'D:\AI-APP\inframind-website\public\downloads'
output_file = r'D:\AI-APP\inframind-website\extracted_texts.txt'

with open(output_file, 'w', encoding='utf-8') as out:
    for f in sorted(os.listdir(downloads)):
        if f.endswith('.pdf'):
            path = os.path.join(downloads, f)
            doc = fitz.open(path)
            text = ''
            for page in doc:
                text += page.get_text()
            doc.close()
            # Replace problematic chars
            text = text.replace('\u2192', '->').replace('\u2022', '*').replace('\u2013', '-').replace('\u2014', '--').replace('\u2018', '"').replace('\u2019', '"').replace('\u201c', '"').replace('\u201d', '"')
            out.write(f'=== {f} ===\n')
            out.write(text)
            out.write('\n\n')
            print(f'Processed: {f}')