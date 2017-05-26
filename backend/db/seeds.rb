# create_table "freelance_documents", force: :cascade do |t|
#     t.string   "title"
#     t.string   "description"
#     t.text     "file_url"
#     t.text     "image_url"
#     t.datetime "created_at",  null: false
#     t.datetime "updated_at",  null: false
#   end

10.times do |d|
	FreelanceDocument.create!(
		title: "Document #{d}",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
		file_url: "https://docs.google.com/document/d/1UUgAob6ZpivgkgCbMD84JMMRc1flrzCPKybtQoAfASo/editusp=sharing",
		image_url: 'https://s3.amazonaws.com/devcamp-static/images/freelance-img.jpg'
	)
end
10.times do |proposal|
	Proposal.create!(
        customer: "Customer #{proposal}",
        portfolio_url: "http://google.com",
        tools: "Ruby on Rails,NodeJs,AngularJs,ReactRx",
        estimaged_hours: (80 + proposal),
        hourly_rate: 120,
        weeks_to_complete:  12,
        client_email: 'email@google.com',
		)
 end
FreelanceDocument.create!(
	title: "Zipped document",
	description: "Sit ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
	file_url: "https://docs.google.com/document/d/1UUgAob6ZpivgkgCbMD84JMMRc1flrzCPKybtQoAfASo/editusp=sharing",
	image_url: 'https://s3.amazonaws.com/devcamp-static/images/freelance-img-2.jpg'
	)

