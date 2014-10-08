<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class User extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
	  Schema::create('user', function (Blueprint $table) {
            $table->integer('nip');
            $table->integer('rank');
            $table->integer('insuline_dose');
            $table->integer('objectif_glycemique');
            $table->string('name', 50);
            $table->string('firstname', 50);
            $table->date('birthday');
            $table->timestamps();
	    });
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::dropIfExists('user');
	}

}
