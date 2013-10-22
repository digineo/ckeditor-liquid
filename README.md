# Liquid Markup Plugin for CKEditor 4.x

This plugin highlights Liquid Markup Blocks like `{{variable.name}}` and `{% liquid block %}` in the WYSIWYG view.

## Installation

Copy the `plugin.js` to `/ckeditor/plugins/liquid/` and active it in your configuration (i.e. `/ckeditor/config.js`):

    CKEDITOR.editorConfig = function( config ){
      config.extraPlugins += (config.extraPlugins.length == 0 ? '' : ',') + 'liquid';
    }

## TODO

* Write-project highlighted blocks in WYSIWYG-View
* Auto-select blocks in WYSIWYG-View on single click

## Sources

* [CKeditor](http://ckeditor.com/)
* [Liquid markup language](http://github.com/tobi/liquid)