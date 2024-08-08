import React from 'react';

const categories = [
  { name: 'Shirts', img: 'https://images.unsplash.com/photo-1535530705774-695729778c55?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { name: 'T-Shirts', img: 'https://images.unsplash.com/photo-1628155216652-4ed9769198be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fG1lbiUyMG1vZGVsJTIwaW4lMjB0c2hpcnR8ZW58MHx8MHx8fDA%3D' },
  { name: 'Caps', img: 'https://plus.unsplash.com/premium_photo-1690038776855-f0f810f7bab8?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { name: 'Accessories', img: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { name: 'Hoodies', img: 'https://images.unsplash.com/photo-1617952125960-38d76f3659d6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8fHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
];

const Categories = () => {
  return (
    <div className="lg:px-32 lg:py-8 p-3">
      <h2 className="lg:text-3xl text-2xl font-bold text-center  text-gray-900 lg:mb-8 mb-4">CATEGORIES</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:gap-5 gap-3">
        {categories.map((category, index) => (
          <div
            key={category.name}
            className={`group h-[8rem] lg:h-[15rem] relative overflow-hidden rounded-lg shadow-lg cursor-pointer transform transition-transform hover:scale-105 ${
              index === categories.length - 1 ? 'col-span-2 md:col-span-2 lg:col-span-1' : 'col-span-1'
            }`}
          >
            <img
              src={category.img}
              alt={category.name}
              className="object-cover w-full h-full group-hover:opacity-75"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-white text-lg font-bold">{category.name}</span>
            </div>
            <div className="lg:hidden absolute inset-0 bg-[#00000033] text-opacity-95 flex items-center justify-center">
              <span className="text-white text-lg font-bold">{category.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
