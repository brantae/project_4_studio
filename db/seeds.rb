Teacher.destroy_all 
User.destroy_all

puts "🌱 Seeding..."

# Teacher seeds
teacher1 = Teacher.create(
    name: "Alyssa Edwards", 
    specialty: "jazz", 
    description: "A fun, Fosse-style jazz class that will have you singing along to all the showtunes!")
teacher2 = Teacher.create(
    name: "Blair St. Clair", 
    specialty: "ballet", 
    description: "Intermediate/advanced ballet focused on technique and pas de deux.")
teacher3 = Teacher.create(
    name: "Miss Naomi", 
    specialty: "hip-hop", 
    description: "Old school hip-hop and breakdancing where you will sweat buckets!")

# User seeds 

user1 = User.create(name: 'Debra')
user2 = User.create(name: 'Karen')
user3 = User.create(name: 'Carol')

# Lesson seeds

#time_format = "%I:%M %p"

time1 = DateTime.new(DateTime.now.year, DateTime.now.month, DateTime.now.day, 12, 30, 0)
formatted_time1 = time1.strftime("%I:%M %p")

time2 = DateTime.new(DateTime.now.year, DateTime.now.month, DateTime.now.day, 18, 0, 0)
formatted_time1 = time1.strftime("%I:%M %p")

time3 = DateTime.new(DateTime.now.year, DateTime.now.month, DateTime.now.day, 8, 0, 0)
formatted_time1 = time1.strftime("%I:%M %p")



Lesson.create(user_id: user1.id, teacher_id: teacher1.id, room_num: 4, start_time: time1, repeat: 'daily', class_length: 60)
Lesson.create(user_id: user1.id, teacher_id: teacher2.id, room_num: 6, start_time: time2, repeat: 'weekly', class_length: 60)
Lesson.create(user_id: user2.id, teacher_id: teacher1.id, room_num: 4, start_time: time1, repeat: 'weekly', class_length: 45)
Lesson.create(user_id: user3.id, teacher_id: teacher3.id, room_num: 5, start_time: time3, repeat: 'bi-weekly', class_length: 120)







puts "✅ Done seeding!"
