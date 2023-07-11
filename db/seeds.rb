Teacher.destroy_all

puts "🌱 Seeding..."

Teacher.create(name: "Alyssa Edwards", specialty: "jazz", description: "A fun, Fosse-style jazz class that will have you singing along to all the showtunes!")
Teacher.create(name: "Blair St. Clair", specialty: "ballet", description: "Intermediate/advanced ballet focused on technique and pas de deux.")
Teacher.create(name: "Miss Naomi", specialty: "hip-hop", description: "Old school hip-hop and breakdancing where you will sweat buckets!")

puts "✅ Done seeding!"
