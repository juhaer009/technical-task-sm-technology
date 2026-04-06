const cards = [
  {
    name: 'Nicolas K. Ellington',
    role: 'IT Specialist',
    avatar: 'https://i.pravatar.cc/48?img=11',
    quote: 'As we continued to use their tool and found more use cases, our feature requests quickly found their way into their backlog.',
    footer: 'Great design solutions',
  },
  {
    name: 'Julian T. Beaumont',
    role: 'IT Specialist',
    avatar: 'https://i.pravatar.cc/48?img=13',
    quote: 'As we continued to use their tool and found more use cases, our feature requests quickly found their way into their backlog.',
    footer: 'Great design solutions',
  },
  {
    name: 'Felipe D. Hawthorne',
    role: 'IT Specialist',
    avatar: 'https://i.pravatar.cc/48?img=15',
    quote: 'As we continued to use their tool and found more use cases, our feature requests quickly found their way into their backlog.',
    footer: 'Great design solutions',
  },
]

const headingAvatars = [
  'https://i.pravatar.cc/32?img=20',
  'https://i.pravatar.cc/32?img=21',
  'https://i.pravatar.cc/32?img=22',
]

function Stars() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-4 h-4 fill-orange-400" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
      ))}
    </div>
  )
}

function TestimonialCard({ name, role, avatar, quote, footer }) {
  return (
    <div className="group bg-white rounded-2xl p-6 flex flex-col justify-between gap-5 transition-all duration-300 ease-in-out hover:bg-black hover:shadow-xl cursor-default">
      {/* Top: avatar + name */}
      <div className="flex items-center gap-3">
        <img src={avatar} alt={name} className="w-10 h-10 rounded-full object-cover shrink-0" />
        <div>
          <p className="text-sm font-semibold text-gray-900 group-hover:text-white transition-colors duration-300">{name}</p>
          <p className="text-xs text-gray-400 group-hover:text-gray-400 transition-colors duration-300">{role}</p>
        </div>
      </div>

      {/* Stars */}
      <Stars />

      {/* Quote */}
      <p className="text-sm text-gray-600 group-hover:text-gray-300 leading-relaxed transition-colors duration-300">
        "{quote}"
      </p>

      {/* Footer */}
      <p className="text-[10px] uppercase tracking-widest font-semibold text-gray-400 group-hover:text-gray-500 transition-colors duration-300 border-t border-gray-200 group-hover:border-gray-700 pt-4">
        {footer}
      </p>
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="bg-gray-100 px-4 sm:px-6 lg:px-12 py-12 sm:py-16">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-10 font-funnel">
          <p className="text-[18px] uppercase tracking-widest text-gray-400 mb-4">User Feedbacks</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 leading-tight max-w-3xl">
            Accelerating growth, and unlocking new potential.{' '}
            {/* Inline overlapping avatars */}
            <span className="inline-flex items-center -space-x-2 mx-1 align-middle">
              {headingAvatars.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt=""
                  className="w-9 h-9 rounded-full border-2 border-gray-100 object-cover"
                />
              ))}
            </span>
            {' '}Let's build your brand—together.
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((card, i) => (
            <TestimonialCard key={i} {...card} />
          ))}
        </div>

      </div>
    </section>
  )
}
