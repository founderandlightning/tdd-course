<?php

namespace Tests\Unit;

use Tests\TestCase;
use App\Component\Users;
use Illuminate\Foundation\Testing\RefreshDatabase;

class UserTest extends TestCase
{

    public function testUserhasName()
    {
        $user = new Users('sandy');
        $this->assertEquals('sandy', $user->name());
    }

    public function testUserAge()
    {
        $user =  new Users('vikram', 55);
        $this->assertEquals(55, $user->age());
    }
}

