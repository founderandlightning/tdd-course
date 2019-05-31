<?php
namespace Tests;

use Tests\TestCase;

class ParentTestClass extends TestCase 
{
    public static $is_migrated = false;

    public static function setUpBeforClass():void 
    {
        exec('php artisan migrate:refresh');
        exec('php artisan db:seed');
    }

    public function tearDown():void
    {
        \DB::connection()->setPdo(null);
        parent::tearDown();
    }
}
