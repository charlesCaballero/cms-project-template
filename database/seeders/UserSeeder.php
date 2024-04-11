<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Faker\Factory as Faker;

class UserSeeder extends Seeder
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

        // Retrieve all office codes from office-related tables
        $officeCodes = DB::table('office_divisions')->pluck('code')
            ->merge(DB::table('office_sections')->pluck('code'))
            ->merge(DB::table('office_units')->pluck('code'))
            ->unique();

        // Define the number of users you want to seed
        $numberOfUsers = 150;

        // Loop to create and insert dummy users
        for ($i = 0; $i < $numberOfUsers; $i++) {
            // Generate a random office code from the retrieved codes
            $officeCode = $faker->randomElement($officeCodes);

            DB::table('users')->insert([
                'hris_id' => $faker->unique()->randomNumber(),
                'user_id' => $faker->unique()->uuid,
                'first_name' => $faker->firstName,
                'middle_name' => $faker->optional()->firstName,
                'last_name' => $faker->lastName,
                'email' => $faker->unique()->safeEmail,
                'position' => $faker->jobTitle,
                'contact_no' => $faker->phoneNumber,
                'pro_code' => 15, // Default value
                'employment_status' => $faker->randomElement(['regular', 'casual', 'contractual']),
                'office_code' => $officeCode, // Use the randomly selected office code
                'email_verified_at' => now(),
                'password' => Hash::make('password'), // Default password for all users
                'remember_token' => Str::random(10),
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
