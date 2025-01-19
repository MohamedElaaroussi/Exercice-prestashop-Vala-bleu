// vmobile.php
<?php

if (!defined('_PS_VERSION_')) {
    exit;
}

use PrestaShop\PrestaShop\Core\Module\AbstractModule;
use Doctrine\ORM\EntityManager;

class VMobile extends AbstractModule
{
    public function __construct()
    {
        $this->name = 'vmobile';
        $this->tab = 'front_office_features';
        $this->version = '1.0.0';
        $this->author = 'Your Name';
        $this->need_instance = 0;
        $this->bootstrap = true;

        parent::__construct();

        $this->displayName = $this->l('Mobile Widget');
        $this->description = $this->l('A mobile widget display module');
        $this->ps_versions_compliancy = ['min' => '8.0.0', 'max' => _PS_VERSION_];
    }

    public function install()
    {
        include(dirname(__FILE__).'/sql/install.php');
        
        return parent::install() &&
            $this->registerHook('displayHome') &&
            $this->registerHook('actionObjectProductAddAfter') &&
            $this->registerHook('actionObjectProductUpdateAfter') &&
            $this->registerHook('actionObjectProductDeleteAfter');
    }

    public function uninstall()
    {
        include(dirname(__FILE__).'/sql/uninstall.php');
        
        return parent::uninstall();
    }

    public function hookDisplayHome($params)
    {
        $entityManager = $this->get('doctrine.orm.entity_manager');
        $mobileRepository = $entityManager->getRepository('VMobile\\Entity\\Mobile');
        
        $mobiles = $mobileRepository->findLatestMobiles();
        
        $this->context->smarty->assign([
            'mobiles' => $mobiles,
            'module_dir' => $this->_path
        ]);
        
        return $this->display(__FILE__, 'views/templates/hook/mobile-widget.tpl');
    }
}