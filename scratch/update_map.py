import re

with open('components/new6/InteractiveMapSection.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Update Component Name & Imports
content = content.replace('export const InteractiveSaudiMap', 'export const InteractiveMapSection')
content = content.replace('../data/', '@/data/')
content = content.replace('./SectionTitle', '@/components/SectionTitle')

# Fix SectionTitle which uses dark text by default. I'll just change the section title text to white inside the component if it has props, or we just rely on CSS inheritance. Wait, SectionTitle in components/SectionTitle.tsx might hardcode `#263370`. We'll just pass a className or style if possible, or modify it later. Let's not touch SectionTitle here, I'll manually replace its text if needed. 
# Actually, the user wants it to look like the brand identity. The map itself is the main thing.

# Apply Dark Mode & Brand Colors
content = content.replace('bg-white', 'bg-[#12172e]')
content = content.replace('bg-[#f6f7fb]', 'bg-[#0a0d1d]')
content = content.replace('border-[#e4e6f0]', 'border-[#1C81AC]/20')
content = content.replace('border-dashed border-[#e4e6f0]', 'border-dashed border-[#1C81AC]/30')

content = content.replace('text-[#5b6178]', 'text-white/60')
content = content.replace('text-[#263370]', 'text-white')
content = content.replace('text-[#0c7fae]', 'text-[#1C81AC]')
content = content.replace('text-[#0a6a91]', 'text-[#1C81AC]')
content = content.replace('text-[#42b07a]', 'text-[#3EB985]')
content = content.replace('text-[#359465]', 'text-[#3EB985]')

content = content.replace('bg-[#0c7fae]', 'bg-[#1C81AC]')
content = content.replace('bg-[#0c7fae]/5', 'bg-[#1C81AC]/10')
content = content.replace('bg-[#42b07a]', 'bg-[#3EB985]')
content = content.replace('bg-[#42b07a]/5', 'bg-[#3EB985]/10')
content = content.replace('bg-[#42b07a]/15', 'bg-[#3EB985]/20')
content = content.replace('bg-[#263370]', 'bg-[#233A77]')
content = content.replace('hover:bg-[#e7e9f2]', 'hover:bg-[#1C81AC]/10')
content = content.replace('bg-[#e4f5ec]', 'bg-[#3EB985]/10')
content = content.replace('border-[#42b07a]/30', 'border-[#3EB985]/30')
content = content.replace('fill-[#263370]', 'fill-[#0a0d1d]')

# SVG Gradients
content = content.replace('stopColor="#263370"', 'stopColor="#233A77"')
content = content.replace('stopColor="#1c2757"', 'stopColor="#12172e"')
content = content.replace('stopColor="#0c7fae"', 'stopColor="#1C81AC"')
content = content.replace('stopColor="#0a6a91"', 'stopColor="#233A77"')
content = content.replace('stopColor="#42b07a"', 'stopColor="#3EB985"')
content = content.replace('stopColor="#359465"', 'stopColor="#3EB985"')

# Borders
content = content.replace('stroke="#ffffff"', 'stroke="#12172e"')
content = content.replace('stroke-white', 'stroke-[#12172e]')

# Font family
content = content.replace('className="py-24', 'style={{ fontFamily: \'Thamaynyah, sans-serif\' }} className="py-24')

# Save
with open('components/new6/InteractiveMapSection.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
