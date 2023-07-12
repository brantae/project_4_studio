Teacher.destroy_all 
Lesson.destroy_all

puts "🌱 Seeding..."

Teacher.create(name: "Alyssa Edwards", specialty: "jazz", description: "A fun, Fosse-style jazz class that will have you singing along to all the showtunes!")
Teacher.create(name: "Blair St. Clair", specialty: "ballet", description: "Intermediate/advanced ballet focused on technique and pas de deux.")
Teacher.create(name: "Miss Naomi", specialty: "hip-hop", description: "Old school hip-hop and breakdancing where you will sweat buckets!")

# time_format = "%I:%M %p"

# lesson_data = [
#     {room_num: 1, time: '10:30 AM', repeat: "weekly", class_length: 60},
#     {room_num: 1, time: '2:00 PM', repeat: "daily", class_length: 120},
#     {room_num: 3, time: '8:15 PM', repeat: "weekly", class_length: 45}
# ]



# lesson_data.each do |lesson|
#     parsed_time = Time.strptime(lesson[:time], time_format)
#     Lesson.create(room_num: lesson[:room_num], start_time: parsed_time, repeat: lesson[:repeat], class_length: lesson[:class_length])

# end



puts "✅ Done seeding!"
