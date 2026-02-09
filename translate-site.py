#!/usr/bin/env python3
"""
Automated Hugo Site Translation Script
Translates all content files to Japanese using Google Translate API
"""

import os
import re
import json
from pathlib import Path
from googletrans import Translator

def translate_text(text, target_lang='ja'):
    """Translate text to target language"""
    translator = Translator()
    try:
        result = translator.translate(text, dest=target_lang)
        return result.text
    except Exception as e:
        print(f"Translation error: {e}")
        return text  # Return original if translation fails

def translate_markdown_file(file_path, target_lang='ja'):
    """Translate a markdown file while preserving front matter"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Split front matter and content
    front_matter_match = re.match(r'^---\n(.*?)\n---\n(.*)$', content, re.DOTALL)
    if not front_matter_match:
        print(f"No front matter found in {file_path}")
        return
    
    front_matter = front_matter_match.group(1)
    markdown_content = front_matter_match.group(2)
    
    # Translate the markdown content
    translated_content = translate_text(markdown_content, target_lang)
    
    # Create new file path
    new_path = file_path.parent / f"{file_path.stem}.{target_lang}.md"
    
    # Write translated file
    with open(new_path, 'w', encoding='utf-8') as f:
        f.write(f"---\n{front_matter}\n---\n{translated_content}")
    
    print(f"Translated {file_path} -> {new_path}")

def translate_site(content_dir="content", target_lang="ja"):
    """Translate all content in the site"""
    content_path = Path(content_dir)
    
    # Find all markdown files
    md_files = list(content_path.rglob("*.md"))
    
    for file_path in md_files:
        if file_path.name.endswith(f".{target_lang}.md"):
            continue  # Skip already translated files
        
        print(f"Translating {file_path}...")
        translate_markdown_file(file_path, target_lang)

if __name__ == "__main__":
    # Install required package first:
    # pip install googletrans==4.0.0-rc1
    
    translate_site()
    print("Translation complete!")
