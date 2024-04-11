<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Faker\Factory as Faker;

class OfficeUnitsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Create an instance of Faker
        $faker = Faker::create();

        // Retrieve all office section codes
        $sectionIds = DB::table('office_sections')->pluck('id');

        // Define the number of units you want to seed
        $numberOfUnits = 20;

        // Loop to create and insert dummy units
        for ($i = 0; $i < $numberOfUnits; $i++) {
            DB::table('office_units')->insert([
                'name' => $faker->company,
                'location' => $faker->optional()->address,
                'acronym' => $faker->optional()->lexify('???'),
                'code' => generateUniqueCode(),
                'section_id' => $faker->randomElement($sectionIds),
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
