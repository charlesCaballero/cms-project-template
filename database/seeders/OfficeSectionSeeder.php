<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Faker\Factory as Faker;

class OfficeSectionSeeder extends Seeder
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

        // Retrieve all office division codes
        $divisionIds = DB::table('office_divisions')->pluck('id');

        // Define the number of sections you want to seed
        $numberOfSections = 10;

        // Loop to create and insert dummy sections
        for ($i = 0; $i < $numberOfSections; $i++) {
            DB::table('office_sections')->insert([
                'name' => $faker->company,
                'location' => $faker->optional()->address,
                'acronym' => $faker->optional()->lexify('???'),
                'code' => generateUniqueCode(),
                'division_id' => $faker->randomElement($divisionIds),
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
