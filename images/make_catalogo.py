import sys

with open('../index.html', 'r', encoding='utf-8') as f:
    base_html = f.read()

with open('catalogo.html', 'r', encoding='utf-8') as f:
    cat_html = f.read()

start_main_base = base_html.find('<main')
end_main_base = base_html.find('</main>') + len('</main>')

start_main_cat = cat_html.find('<main')
end_main_cat = cat_html.find('</main>') + len('</main>')

if start_main_base != -1 and end_main_base != -1 and start_main_cat != -1 and end_main_cat != -1:
    main_cat_content = cat_html[start_main_cat:end_main_cat]
    
    new_html = base_html[:start_main_base] + main_cat_content + base_html[end_main_base:]
    
    # Add CSS rules for the catalog hover effect
    css_addition = '''        .product-card:hover .product-image-hover { opacity: 1; }
        .product-card:hover .product-image-default { opacity: 0; }
'''
    style_end = new_html.find('</style>')
    if style_end != -1:
        new_html = new_html[:style_end] + css_addition + new_html[style_end:]
        
    with open('../catalogo.html', 'w', encoding='utf-8') as f:
        f.write(new_html)
    print('catalogo.html creado con exito.')
else:
    print('Error encontrando tags main')
