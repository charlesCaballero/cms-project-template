<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::disableForeignKeyConstraints();

        Schema::create('office_sections', function (Blueprint $table) {
            $table->id();
            $table->text('name');
            $table->text('location')->nullable();
            $table->text('acronym')->nullable();
            $table->bigInteger('division_id')->nullable();
            $table->foreign('division_id')->references('id')->on('office_divisions');
        });

        Schema::enableForeignKeyConstraints();
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('office_sections');
    }
};
