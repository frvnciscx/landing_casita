import sys

with open('../index.html', 'r', encoding='utf-8') as f:
    html_content = f.read()

with open('catalogo.html', 'r', encoding='utf-8') as f:
    cat_content = f.read()

start_cat = cat_content.find('<!-- Sidebar Filters -->')
end_cat = cat_content.find('</main>')

if start_cat != -1 and end_cat != -1:
    catalog_section = '<div class="flex-1 layout-container flex flex-col lg:flex-row max-w-[1440px] mx-auto w-full px-4 lg:px-10 py-16 gap-8">\n' + cat_content[start_cat:end_cat] + '\n</div>'
    
    start_replace = html_content.find('<div class="w-full max-w-[1280px] px-4 lg:px-10 py-16">')
    end_replace = html_content.find('<div class="w-full max-w-[1280px] px-4 lg:px-10 pb-16">')
    
    if start_replace != -1 and end_replace != -1:
        new_html = html_content[:start_replace] + catalog_section + html_content[end_replace:]
        
        css_addition = '''        .product-card:hover .product-image-hover { opacity: 1; }
        .product-card:hover .product-image-default { opacity: 0; }
'''
        style_end = new_html.find('</style>')
        new_html = new_html[:style_end] + css_addition + new_html[style_end:]
        
        with open('../index.html', 'w', encoding='utf-8') as f:
            f.write(new_html)
            
        print('Exito index.html!')
    else:
        print('No encontro limites ref:', start_replace, end_replace)
else:
    print('No encontro catalogo:', start_cat, end_cat)
