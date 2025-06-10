let posts = [
	{
		id: 1,
		title: 'Plover, blacksmith',
		content:
			'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.',
		image: 'http://dummyimage.com/100x100.png/5fa2dd/ffffff',
		user_id: 9,
		created_at: '2022-01-06',
		updated_at: '2022-10-03',
	},
	{
		id: 2,
		title: 'King cormorant',
		content:
			'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.',
		image: 'http://dummyimage.com/100x100.png/5fa2dd/ffffff',
		user_id: 8,
		created_at: '2022-04-17',
		updated_at: '2022-10-02',
	},
	{
		id: 3,
		title: 'Squirrel glider',
		content:
			'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
		image: 'http://dummyimage.com/100x100.png/ff4444/ffffff',
		user_id: 2,
		created_at: '2022-05-01',
		updated_at: '2022-10-02',
	},
	{
		id: 4,
		title: 'Mynah, common',
		content:
			'Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.',
		image: 'http://dummyimage.com/100x100.png/cc0000/ffffff',
		user_id: 2,
		created_at: '2022-03-29',
		updated_at: '2022-10-06',
	},
	{
		id: 5,
		title: 'Ocelot',
		content:
			'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
		image: 'http://dummyimage.com/100x100.png/cc0000/ffffff',
		user_id: 4,
		created_at: '2022-04-01',
		updated_at: '2022-10-02',
	},
	{
		id: 6,
		title: 'Mockingbird, galapagos',
		content:
			'Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo.',
		image: 'http://dummyimage.com/100x100.png/cc0000/ffffff',
		user_id: 2,
		created_at: '2022-09-18',
		updated_at: '2022-10-03',
	},
	{
		id: 7,
		title: 'Cape Barren goose',
		content:
			'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
		image: 'http://dummyimage.com/100x100.png/5fa2dd/ffffff',
		user_id: 4,
		created_at: '2022-04-28',
		updated_at: '2022-10-02',
	},
	{
		id: 8,
		title: 'Godwit, hudsonian',
		content:
			'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
		image: 'http://dummyimage.com/100x100.png/ff4444/ffffff',
		user_id: 8,
		created_at: '2022-05-23',
		updated_at: '2022-10-06',
	},
	{
		id: 9,
		title: 'Jackrabbit, white-tailed',
		content:
			'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.',
		image: 'http://dummyimage.com/100x100.png/ff4444/ffffff',
		user_id: 3,
		created_at: '2022-05-07',
		updated_at: '2022-10-04',
	},
	{
		id: 10,
		title: 'Stork, jabiru',
		content:
			'Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue.',
		image: 'http://dummyimage.com/100x100.png/cc0000/ffffff',
		user_id: 10,
		created_at: '2022-02-10',
		updated_at: '2022-10-04',
	},
	{
		id: 11,
		title: 'Giant armadillo',
		content: 'Quisque ut erat.',
		image: 'http://dummyimage.com/100x100.png/dddddd/000000',
		user_id: 2,
		created_at: '2022-06-01',
		updated_at: '2022-10-03',
	},
	{
		id: 12,
		title: 'Constrictor, eastern boa',
		content:
			'Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna.',
		image: 'http://dummyimage.com/100x100.png/cc0000/ffffff',
		user_id: 2,
		created_at: '2022-05-07',
		updated_at: '2022-10-05',
	},
	{
		id: 13,
		title: 'Lark, horned',
		content:
			'In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.',
		image: 'http://dummyimage.com/100x100.png/ff4444/ffffff',
		user_id: 5,
		created_at: '2022-08-13',
		updated_at: '2022-10-04',
	},
	{
		id: 14,
		title: 'Squirrel, eastern fox',
		content:
			'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.',
		image: 'http://dummyimage.com/100x100.png/5fa2dd/ffffff',
		user_id: 10,
		created_at: '2022-09-09',
		updated_at: '2022-10-03',
	},
	{
		id: 15,
		title: 'Oryx, fringe-eared',
		content:
			'Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.',
		image: 'http://dummyimage.com/100x100.png/dddddd/000000',
		user_id: 3,
		created_at: '2022-09-27',
		updated_at: '2022-10-07',
	},
	{
		id: 16,
		title: 'Ring-tailed possum',
		content:
			'Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
		image: 'http://dummyimage.com/100x100.png/dddddd/000000',
		user_id: 2,
		created_at: '2022-01-14',
		updated_at: '2022-10-04',
	},
	{
		id: 17,
		title: 'Rabbit, eastern cottontail',
		content:
			'Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
		image: 'http://dummyimage.com/100x100.png/ff4444/ffffff',
		user_id: 9,
		created_at: '2022-03-23',
		updated_at: '2022-10-07',
	},
	{
		id: 18,
		title: 'Spotted deer',
		content:
			'In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.',
		image: 'http://dummyimage.com/100x100.png/cc0000/ffffff',
		user_id: 9,
		created_at: '2022-04-12',
		updated_at: '2022-10-07',
	},
	{
		id: 19,
		title: 'Blackbuck',
		content:
			'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.',
		image: 'http://dummyimage.com/100x100.png/cc0000/ffffff',
		user_id: 7,
		created_at: '2022-05-08',
		updated_at: '2022-10-05',
	},
	{
		id: 20,
		title: 'Crow, house',
		content:
			'Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis.',
		image: 'http://dummyimage.com/100x100.png/dddddd/000000',
		user_id: 5,
		created_at: '2022-01-03',
		updated_at: '2022-10-04',
	},
	{
		id: 21,
		title: 'Western grey kangaroo',
		content:
			'Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.',
		image: 'http://dummyimage.com/100x100.png/5fa2dd/ffffff',
		user_id: 6,
		created_at: '2022-06-05',
		updated_at: '2022-10-07',
	},
	{
		id: 22,
		title: 'Iguana, land',
		content:
			'Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend.',
		image: 'http://dummyimage.com/100x100.png/cc0000/ffffff',
		user_id: 2,
		created_at: '2022-06-26',
		updated_at: '2022-10-07',
	},
	{
		id: 23,
		title: 'Pelican, great white',
		content:
			'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.',
		image: 'http://dummyimage.com/100x100.png/dddddd/000000',
		user_id: 7,
		created_at: '2022-07-16',
		updated_at: '2022-10-03',
	},
	{
		id: 24,
		title: 'Lechwe, kafue flats',
		content:
			'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum.',
		image: 'http://dummyimage.com/100x100.png/dddddd/000000',
		user_id: 9,
		created_at: '2022-03-04',
		updated_at: '2022-10-07',
	},
	{
		id: 25,
		title: 'Red-knobbed coot',
		content:
			'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.',
		image: 'http://dummyimage.com/100x100.png/dddddd/000000',
		user_id: 10,
		created_at: '2022-01-01',
		updated_at: '2022-10-04',
	},
	{
		id: 26,
		title: 'Porcupine, prehensile-tailed',
		content:
			'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.',
		image: 'http://dummyimage.com/100x100.png/dddddd/000000',
		user_id: 4,
		created_at: '2022-08-01',
		updated_at: '2022-10-05',
	},
	{
		id: 27,
		title: "Gambel's quail",
		content:
			'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.',
		image: 'http://dummyimage.com/100x100.png/5fa2dd/ffffff',
		user_id: 5,
		created_at: '2022-02-11',
		updated_at: '2022-10-07',
	},
	{
		id: 28,
		title: 'Chuckwalla',
		content:
			'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
		image: 'http://dummyimage.com/100x100.png/dddddd/000000',
		user_id: 7,
		created_at: '2022-09-19',
		updated_at: '2022-10-06',
	},
	{
		id: 29,
		title: 'Red-billed tropic bird',
		content:
			'Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.',
		image: 'http://dummyimage.com/100x100.png/cc0000/ffffff',
		user_id: 3,
		created_at: '2022-01-17',
		updated_at: '2022-10-03',
	},
	{
		id: 30,
		title: 'Southern lapwing',
		content:
			'Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.',
		image: 'http://dummyimage.com/100x100.png/ff4444/ffffff',
		user_id: 8,
		created_at: '2022-05-08',
		updated_at: '2022-10-06',
	},
	{
		id: 31,
		title: 'Long-tailed jaeger',
		content:
			'Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius.',
		image: 'http://dummyimage.com/100x100.png/ff4444/ffffff',
		user_id: 10,
		created_at: '2022-06-06',
		updated_at: '2022-10-06',
	},
	{
		id: 32,
		title: 'Jaguarundi',
		content:
			'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.',
		image: 'http://dummyimage.com/100x100.png/5fa2dd/ffffff',
		user_id: 8,
		created_at: '2022-04-30',
		updated_at: '2022-10-04',
	},
	{
		id: 33,
		title: 'African wild cat',
		content:
			'Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.',
		image: 'http://dummyimage.com/100x100.png/dddddd/000000',
		user_id: 5,
		created_at: '2022-06-18',
		updated_at: '2022-10-05',
	},
	{
		id: 34,
		title: 'Blue shark',
		content:
			'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo.',
		image: 'http://dummyimage.com/100x100.png/cc0000/ffffff',
		user_id: 10,
		created_at: '2022-04-08',
		updated_at: '2022-10-03',
	},
	{
		id: 35,
		title: 'Western lowland gorilla',
		content:
			'Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis.',
		image: 'http://dummyimage.com/100x100.png/ff4444/ffffff',
		user_id: 8,
		created_at: '2022-04-15',
		updated_at: '2022-10-04',
	},
	{
		id: 36,
		title: 'Heron, green',
		content:
			'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
		image: 'http://dummyimage.com/100x100.png/5fa2dd/ffffff',
		user_id: 10,
		created_at: '2022-06-15',
		updated_at: '2022-10-06',
	},
	{
		id: 37,
		title: 'Admiral, indian red',
		content:
			'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
		image: 'http://dummyimage.com/100x100.png/ff4444/ffffff',
		user_id: 3,
		created_at: '2022-01-09',
		updated_at: '2022-10-06',
	},
	{
		id: 38,
		title: 'Mockingbird, galapagos',
		content:
			'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.',
		image: 'http://dummyimage.com/100x100.png/dddddd/000000',
		user_id: 4,
		created_at: '2022-06-06',
		updated_at: '2022-10-05',
	},
	{
		id: 39,
		title: 'Orca',
		content:
			'Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl.',
		image: 'http://dummyimage.com/100x100.png/ff4444/ffffff',
		user_id: 3,
		created_at: '2022-04-01',
		updated_at: '2022-10-06',
	},
	{
		id: 40,
		title: 'Baboon, olive',
		content:
			'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
		image: 'http://dummyimage.com/100x100.png/dddddd/000000',
		user_id: 9,
		created_at: '2022-09-03',
		updated_at: '2022-10-04',
	},
	{
		id: 41,
		title: 'Caiman, spectacled',
		content:
			'Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo.',
		image: 'http://dummyimage.com/100x100.png/dddddd/000000',
		user_id: 8,
		created_at: '2022-04-22',
		updated_at: '2022-10-03',
	},
	{
		id: 42,
		title: 'Sheep, stone',
		content:
			'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim.',
		image: 'http://dummyimage.com/100x100.png/dddddd/000000',
		user_id: 10,
		created_at: '2022-07-11',
		updated_at: '2022-10-06',
	},
	{
		id: 43,
		title: 'Macaw, scarlet',
		content: 'In hac habitasse platea dictumst.',
		image: 'http://dummyimage.com/100x100.png/ff4444/ffffff',
		user_id: 4,
		created_at: '2022-03-30',
		updated_at: '2022-10-07',
	},
	{
		id: 44,
		title: 'Long-billed corella',
		content:
			'Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.',
		image: 'http://dummyimage.com/100x100.png/ff4444/ffffff',
		user_id: 7,
		created_at: '2022-02-18',
		updated_at: '2022-10-06',
	},
	{
		id: 45,
		title: 'Snake, tiger',
		content:
			'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
		image: 'http://dummyimage.com/100x100.png/ff4444/ffffff',
		user_id: 7,
		created_at: '2022-04-02',
		updated_at: '2022-10-03',
	},
	{
		id: 46,
		title: 'Red-tailed hawk',
		content:
			'Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.',
		image: 'http://dummyimage.com/100x100.png/dddddd/000000',
		user_id: 2,
		created_at: '2022-03-15',
		updated_at: '2022-10-04',
	},
	{
		id: 47,
		title: 'Booby, masked',
		content:
			'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
		image: 'http://dummyimage.com/100x100.png/5fa2dd/ffffff',
		user_id: 8,
		created_at: '2022-08-05',
		updated_at: '2022-10-02',
	},
	{
		id: 48,
		title: 'Red-necked phalarope',
		content:
			'Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.',
		image: 'http://dummyimage.com/100x100.png/ff4444/ffffff',
		user_id: 5,
		created_at: '2022-09-09',
		updated_at: '2022-10-02',
	},
	{
		id: 49,
		title: 'Bee-eater (unidentified)',
		content:
			'Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
		image: 'http://dummyimage.com/100x100.png/5fa2dd/ffffff',
		user_id: 4,
		created_at: '2022-02-11',
		updated_at: '2022-10-02',
	},
	{
		id: 50,
		title: 'Red deer',
		content:
			'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit.',
		image: 'http://dummyimage.com/100x100.png/5fa2dd/ffffff',
		user_id: 8,
		created_at: '2022-03-30',
		updated_at: '2022-10-07',
	},
];

let users = [
	{
		id: 1,
		first_name: 'Lorilee',
		last_name: 'Adame',
		email: 'ladame0@guardian.co.uk',
		password: '12345678',
	},
	{
		id: 2,
		first_name: 'Gannon',
		last_name: 'Manwell',
		email: 'gmanwell1@naver.com',
		password: '12345678',
	},
	{
		id: 3,
		first_name: 'Christiana',
		last_name: 'Dowtry',
		email: 'cdowtry2@mapy.cz',
		password: '12345678',
	},
	{
		id: 4,
		first_name: 'Warden',
		last_name: 'Ansteys',
		email: 'wansteys3@yahoo.com',
		password: '12345678',
	},
	{
		id: 5,
		first_name: 'Claybourne',
		last_name: 'Barbosa',
		email: 'cbarbosa4@si.edu',
		password: '12345678',
	},
	{
		id: 6,
		first_name: 'Zita',
		last_name: 'Triner',
		email: 'ztriner5@youku.com',
		password: '12345678',
	},
	{
		id: 7,
		first_name: 'Orsa',
		last_name: 'Pilcher',
		email: 'opilcher6@surveymonkey.com',
		password: '12345678',
	},
	{
		id: 8,
		first_name: 'Lyn',
		last_name: 'Fockes',
		email: 'lfockes7@answers.com',
		password: '12345678',
	},
	{
		id: 9,
		first_name: 'Harv',
		last_name: 'Olifaunt',
		email: 'holifaunt8@jalbum.net',
		password: '12345678',
	},
	{
		id: 10,
		first_name: 'Nikita',
		last_name: 'Duncanson',
		email: 'nduncanson9@harvard.edu',
		password: '12345678',
	},
];


let currentPagePagi = 1;
let postPerPage = 5;

function checkLogin() {
    const getEmail = document.getElementById("email").value.trim();
    const getPass = document.getElementById("password").value.trim();
    
    if(getEmail === "" || getPass === "") {
        alert("Hãy nhập đầy đủ thông tin");
        return;
    }

    let isFound = false;
    users.forEach((user) => {
        if(getEmail === user.email && getPass === user.password) {
            alert(`Xin chào ${user.first_name} ${user.last_name}`)
            isFound = true;
            return;
        }
    });

    if(!isFound) {
        alert("Thông tin tài khoản không chính xác");
    }

    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
}


function saveUser() {
    const newId = users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 1;
    const getFirstName = document.getElementById("firstname_su").value.trim();
    const getLastName = document.getElementById("lastname_su").value.trim();
    const getEmailSU = document.getElementById("email_su").value.trim();
    const getPassSU = document.getElementById("password_su").value.trim();

    if(getFirstName === "" || getLastName === "" || getEmailSU === "" || getPassSU === "") {
        alert("Hãy nhập đầy đủ thông tin");
        return;
    }
    else if (users.some(user => user.email === getEmailSU)) {
        alert("Email này đã có tài khoản");
		document.getElementById("email_su").value = "";
        return;
    }

    const user = {
        id: newId,
        first_name: getFirstName,
        last_name: getLastName,
        email: getEmailSU,
        password: getPassSU,
    }

    users.push(user);
    alert("Đã thêm người dùng mới");
    
	document.getElementById("firstname_su").value = "";
	document.getElementById("lastname_su").value = "";
	document.getElementById("email_su").value = "";
	document.getElementById("password_su").value = "";
}



function showAllUser() {
	const getUserFiltered = document.getElementById("userfiltered");
	const headTitle = document.getElementById("headlist");

	headTitle.style.display = "table-header-group";
	getUserFiltered.style.display = "table-row-group";

	let rs = "";
	users.forEach((user) => {
		rs += `
		<tr>
			<td>${user.id}</td>
			<td>${user.first_name} ${user.last_name}</td>
			<td>${user.email}</td>
		</tr>
		`
	});

	getUserFiltered.innerHTML = rs;
}


function filterUser() {
	const getUserFiltered = document.getElementById("userfiltered");
	const keyword = document.getElementById("inputkeyword").value.trim();
	const filUser = users.filter((user) => user.last_name.toLowerCase().includes(keyword.toLowerCase()) || user.first_name.toLowerCase().includes(keyword.toLowerCase()) || user.email.toLowerCase().includes(keyword.toLowerCase())); 
	const headTitle = document.getElementById("headlist");

	headTitle.style.display = "table-header-group";
	getUserFiltered.style.display = "table-row-group";

	if(keyword.length == 0) {
		showAllUser();
		return;
	}

	let rs = "";
	filUser.forEach((u) => {
		rs += `
		<tr>
			<td>${u.id}</td>
			<td>${u.first_name} ${u.last_name}</td>
			<td>${u.email}</td>
		</tr>
		`
	});

	getUserFiltered.innerHTML = rs;
	document.getElementById("inputkeyword").value = "";
	getUserFiltered.style.display = "contents";
}

function turnOffListUser() {
	const getUser = document.getElementById("userfiltered");
	const headTitle = document.getElementById("headlist");

	headTitle.style.display = "none";
	getUser.style.display = "none";

}



function getNameAuthor(user_id) {
	const user = users.find(user => user.id === user_id);
	return `${user.first_name} ${user.last_name}`;
}


function showPosts() {
	const getPost = document.getElementById("listposts");
	let start = (currentPagePagi - 1) * postPerPage;
    let end = start + postPerPage;
    let paginated = posts.slice(start, end);
	const headTitle = document.getElementById("headlistpost");

	headTitle.style.display = "table-header-group";
	getPost.style.display = "table-row-group";
	
	let rs = "";
	paginated.forEach((post) => {
		const nameAuthor = getNameAuthor(post.user_id);
		rs += `
			<tr>
				<td>${post.id}</td>
				<td>${post.title}</td>
				<td>${post.created_at}</td>
				<td>${nameAuthor}</td>
				<td><button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#postModal" onclick="showPostDetail(${post.id})">Xem chi tiết</button></td>
			</tr>
		`
	});
	getPost.innerHTML = rs;
	createPagi();
	document.getElementById("listsearch").style.display = "none";
}


function ChangePostPerPage() {
    postPerPage = parseInt(document.getElementById("chooseop").value)
    currentPagePagi = 1;
    showPosts();
}

function createPagi() {
    const pagination = document.getElementById("pagination");
    const totalPage = Math.ceil(posts.length / postPerPage);

    let pagi = "";
    if(currentPagePagi > 1) {
        pagi += `<button type="button" id="prev" class="btn btn-outline-primary m-3" href="#" onclick="currentPagePagi = ${currentPagePagi - 1}; showPosts()">Previous</button>`;
    }

    for(let i =1; i<= totalPage; i++) {
        if (i === currentPagePagi) {
            pagi += `<button type="button" id="paginow" class="btn btn-outline-primary m-3 active" href="#" onclick="currentPagePagi = ${i}; showPosts()">${i}</button>`;
        } else {
            pagi += `<button type="button" id="paginow" class="btn btn-outline-primary m-3" href="#" onclick="currentPagePagi = ${i}; showPosts()">${i}</button>`;
        }
    }

    if(currentPagePagi < totalPage) {
        pagi += `<button type="button" id="nex" class="btn btn-outline-primary m-3" href="#" onclick="currentPagePagi = ${currentPagePagi + 1}; showPosts()">Next</button>`;
    }

    pagination.innerHTML = pagi;
	pagination.style.display = "flex";
}

function turnOffListPosts() {
	const getPost = document.getElementById("listposts");
	const headTitle = document.getElementById("headlistpost");
    const pagination = document.getElementById("pagination");
	const rsSearch = document.getElementById("listsearch");

	rsSearch.style.display = "none";

	pagination.style.display = "none";

	headTitle.style.display = "none";

	getPost.style.display = "none";
}


function showPostDetail(postId) {
	const post = posts.find(post => post.id === postId);
	const nameAuthor = getNameAuthor(post.user_id);
	const detail = document.getElementById("postdetail");
	
	if(post) {
		detail.innerHTML = `
			            <li>ID: ${post.id}</li>
                        <li>Tiêu đề: ${post.title}</li>
                        <li>Nội dung: ${post.content}</li>
                        <li>Link ảnh: ${post.image}</li>
                        <li>Tên người tạo: ${nameAuthor}</li>
                        <li>Ngày tạo: ${post.created_at}</li>
                        <li>Ngày sửa đổi: ${post.updated_at}</li>
		`;
	}

}


function searchPosts() {
    const valueSearch = document.getElementById("searchUserEmail").value.trim().toLowerCase();
    const resultSearch = document.getElementById("listsearch");
    const pagination = document.getElementById("pagination");
	const getPost = document.getElementById("listposts");

	getPost.style.display = "none";
	pagination.style.display = "none";


	resultSearch.style.display = "table-row-group";

    if (!valueSearch) {
        alert("Vui lòng nhập email để tìm kiếm");
        return;
    }

    const user = users.find(u => u.email.toLowerCase() === valueSearch);
    if (!user) {
        alert("Không tìm thấy bài viết nào với email này!");
		document.getElementById("searchUserEmail").value = "";
		document.getElementById("headlistpost").style.display = "none";
        return;
    }

    const userPosts = posts.filter(post => post.user_id === user.id);
    if (userPosts.length === 0) {
        alert("Người dùng này không có bài viết!");
        return;
    }

    let rs = "";
    userPosts.forEach(post => {
        rs += `
            <tr>
                <td>${post.title}</td>
            </tr>
        `;
    });
    resultSearch.innerHTML = rs;
	document.getElementById("searchUserEmail").value = "";
}