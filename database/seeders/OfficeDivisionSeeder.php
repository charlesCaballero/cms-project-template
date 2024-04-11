<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Faker\Factory as Faker;

class OfficeDivisionSeeder extends Seeder
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

        // Define the number of divisions you want to seed
        $numberOfDivisions = 5;

        // Loop to create and insert dummy divisions
        for ($i = 0; $i < $numberOfDivisions; $i++) {
            DB::table('office_divisions')->insert([
                'name' => $faker->company,
                'location' => $faker->optional()->address,
                'acronym' => $faker->optional()->lexify('???'),
                'code' => generateUniqueCode(),
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
