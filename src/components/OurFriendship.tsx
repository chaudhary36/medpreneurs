'use client';

import Image from 'next/image';
import Link from 'next/link';

const friends = [
  {
    name: 'Anuj',
    photo: '/images/anujimg.png', // Replace with real photo
    bio: 'Anuj is the visionary of our group, always thinking big and bringing everyone together.',
  },
  {
    name: 'Krishna',
    photo: '/images/krishna.PNG', // Replace with real photo
    bio: 'Krishna is the go-getter, always executing ideas and making things happen.',
  },
  {
    name: 'Amit',
    photo: '/images/amit.PNG', // Replace with real photo
    bio: 'Amit is the creative mind, always coming up with innovative solutions and designs.',
  },
  {
    name: 'Kaish',
    photo: '/images/kaish.PNG', // Replace with real photo
    bio: 'Kaish is the optimist, always keeping the energy high and motivating everyone.',
  },
];

const OurFriendshipSection = () => {
  return (
    <section className="bg-white py-20 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-semibold text-black mb-10">Our Friendship</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {friends.map((friend, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center transition-transform transform hover:scale-105 hover:shadow-lg"
            >
              <div className="relative w-36 h-36 mb-4 rounded-full overflow-hidden border-4 border-yellow-400">
                <Link href={`${friend.name.toLocaleLowerCase()}`}>
                <Image
                  src={friend.photo}
                  alt={friend.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                  />
                  </Link>
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">{friend.name}</h3>
              <p className="text-gray-600 text-sm">{friend.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurFriendshipSection;
