import { BookOpen, GraduationCap, Users, User, Lightbulb, RefreshCw, Shield, Clock } from 'lucide-react';

export function About() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="text-center mb-8 mt-16"> {/* Added mt-16 to push content below navbar */}
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          About NotesNeo
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Empowering students with comprehensive academic resources and a supportive learning community.
        </p>
      </div>

      {/* Image Section - For both Small and Large Screens */}
      <div className="mt-8 sm:mt-8 lg:mt-0 sm:max-w-lg sm:mx-auto lg:hidden sm:flex justify-center p-6"> {/* Added p-4 for padding */}
        <img
          className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5"
          src="https://i.ibb.co/W2rp6sg/notesneo.jpg"
          alt="Students collaborating"
        />
      </div>

      {/* Mission Section */}
      <div className="relative py-8 sm:py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            {/* Mission Text */}
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl">
                Our Mission
              </h1>
              <p className="mt-3 text-base text-gray-500 dark:text-gray-400 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                NotesNeo was founded with a simple yet powerful mission: to make quality education accessible to every student. We believe that access to comprehensive study materials shouldn't be a barrier to academic success.
                <br /><br />
                Through our platform, we're building a community where students can easily find, share, and learn from well-organized academic resources.
                <br /><br />
                We continuously enhance our resources to support students’ academic and personal success.
              </p>
            </div>

            {/* Image for Large Screens */}
            <div className="hidden lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5"
                src="https://i.ibb.co/W2rp6sg/notesneo.jpg"
                alt="Students collaborating"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-white dark:bg-gray-800 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Our Values</h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              What drives us forward
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              {values.map((value) => (
                <div key={value.name} className="relative">
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <value.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-white">{value.name}</p>
                  <p className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-400">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const values = [
  {
    name: 'Quality Education',
    description: 'We provide high-quality notes that help students learn effectively.',
    icon: GraduationCap,
  },
  {
    name: 'Accessibility',
    description: 'We make sure students can access our resources anytime and anywhere.',
    icon: BookOpen,
  },
  {
    name: 'Community',
    description: 'We build a strong community where students can support each other.',
    icon: Users,
  },
  {
    name: 'Innovation',
    description: 'We keep improving and offering new resources to help students grow.',
    icon: Lightbulb,
  },
  {
    name: 'Student-Centered',
    description: 'Our resources are designed to meet the needs of each student.',
    icon: User,
  },
  {
    name: 'Continuous Improvement',
    description: 'We always work to make our resources better for students.',
    icon: RefreshCw,
  },
  {
    name: 'Integrity',
    description: 'We offer honest and trustworthy resources students can rely on.',
    icon: Shield,
  },
  {
    name: 'Collaboration',
    description: 'We encourage students to work together and share knowledge.',
    icon: Users,
  },
  {
    name: 'Time Efficiency',
    description: 'We help students save time by providing well-organized and focused resources.',
    icon: Clock,
  },
];
