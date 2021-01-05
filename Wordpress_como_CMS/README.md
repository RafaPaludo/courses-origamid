# WordPress como CMS
Esse projeto tem como foco desenvolver um tema para Wordpress usando essa aplicação apenas como gerenciador dos conteúdos, para facilitar a integração com a base de dados.

### Documentação oficial do [Worpress](https://wordpress.org/themes/)

### Documentação oficial do [PHP](https://www.php.net/)

### Site do [XAMPP](https://www.apachefriends.org/pt_br/index.html)

## Checklist do que precisa ser feito para configurar um tema no Wordpress:

1. Copiar a pasta do site para wp-content/themes/

2. Mudar o arquivo index.html para index.php

3. Colocar/criar o arquivo style.css na pasta raiz do tema !importante

4. Adicionar a descrição do tema dentro de style.css
```
/*
Theme Name: Hendel Rest
Theme URI: localhost/hendel
Author: Rafa Paludo
Author URI: localhost/hendel
Description: Esse é um tema teste para o site desenvolvido no Origamid
Version: 1.0
*/
```

5. Ativar o tema no Wordpress, no caso wp-admin

6. Corrigir o caminho de style.css e outros caminhos de estilo. Esse função retorna o caminho até a pasta raiz do tema:
```
<?php echo get_stylesheet_directory_uri(); ?>
```

7. Separar o header e o footer em arquivos header.php e footer.php
Antes de fechar o header, adicionar: 
```
<?php wp_head(); ?>
```
Antes de fechar o footer, adicionar: 
```
<?php wp_footer(); ?>
```
Nas páginas do site, carregar o header e o footer: 
```
<?php get_header(); ?> 
<?php get_footer(); ?>
```

8. Substituir as informações por [funções do Wordpress](https://codex.wordpress.org/Template_Tags)

9. Adicionar as páginas na interface do wordpress

10. Tranformar as páginas em templates de Páginas. A página index.php deve ter um conteúdo genérico. As demis páginas, devem ter o início com page- para faciltar a organização. Para transformar em template, é necessário adicionar o código abaixo ao início do arquivo .php:
```
<?php 
// Template Name: Conteúdo
?>
```
11. Adicionar o loop para a criação dos posts, conforme o código abaixo:
```
<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
<?php the_title(); ?>
<?php the_content(); ?>
<?php endwhile; else : ?>
	<p><?php esc_html_e( 'Sorry, no posts matched your criteria.' ); ?></p>
<?php endif; ?>
```
12. Adicionar o plugin de customização de campos, [ACF](https://www.advancedcustomfields.com/) ou [CMB2](https://github.com/CMB2/CMB2) e trocar os conteúdos customizáveis para o clinte trocar via dashboard

13. Repeatr field:
```
<?php if (have_rows('nome_do_repeater')) : while(have_rows('nome_do_repeater')) : the_row(); ?>
	the_sub_field('nome_do_campo');
<?php endwhile; else : endif;  ?>
```
