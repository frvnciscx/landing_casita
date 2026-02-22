with open('../index.html', 'r', encoding='utf-8') as f:
    base_html = f.read()

with open('nosotros_stitch.html', 'r', encoding='utf-8') as f:
    stitch_html = f.read()

start_stitch = stitch_html.find('<!-- Hero Section -->')
end_stitch = stitch_html.find('<!-- Bottom Nav Bar -->')

start_main_base = base_html.find('<main')
start_main_content = base_html.find('>', start_main_base) + 1
end_main_base = base_html.find('</main>')

if start_stitch != -1 and end_stitch != -1 and start_main_base != -1 and end_main_base != -1:
    stitch_content = stitch_html[start_stitch:end_stitch]
    new_html = base_html[:start_main_content] + '\n' + stitch_content + '\n' + base_html[end_main_base:]
    
    with open('../nosotros.html', 'w', encoding='utf-8') as f:
        f.write(new_html)
    print('Exito crear nosotros.html')
else:
    print('No se encontraron limites', start_stitch, end_stitch, start_main_base, end_main_base)
