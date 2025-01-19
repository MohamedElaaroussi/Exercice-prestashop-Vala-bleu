{* views/templates/hook/mobile-widget.tpl *}
<div class="vmobile-widget">
    <h2>{l s='Latest Mobile Phones' mod='vmobile'}</h2>
    <div class="mobile-list">
        {foreach from=$mobiles item=mobile}
            <div class="mobile-item">
                <img src="{$module_dir}views/img/{$mobile->getImage()}" alt="{$mobile->getName()}" />
                <h3>{$mobile->getName()}</h3>
                <p>{$mobile->getDescription()}</p>
                <div class="price">{displayPrice price=$mobile->getPrice()}</div>
            </div>
        {/foreach}
    </div>
</div>