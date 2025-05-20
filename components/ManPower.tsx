"use client"
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ChevronDown, Users, Star, Award, Shield, CheckCircle, Clock } from 'lucide-react';
import Image from 'next/image';

// Types
interface Team {
    id: number;
    name: string;
    count: number;
    category: string;
    skills: string[];
    yearsExperience: number;
    certifications: string[];
    description: string;
    keyProjects: string[];
}

interface TeamCategory {
    id: string;
    name: string;
}

const StatsCard = ({ icon: Icon, title, value, subtitle, color }: {
    icon: any;
    title: string;
    value: string | number;
    subtitle: string;
    color: string;
}) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
        className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border-2 border-dashed border-${color}-500/30 dark:border-${color}-400/30 hover:border-${color}-500 dark:hover:border-${color}-400 transition-colors duration-300`}
    >
        <div className="flex items-center mb-3">
            <Icon className={`w-8 h-8 text-${color}-500 dark:text-${color}-400 mr-2`} />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{title}</h3>
        </div>
        <p className={`text-3xl font-bold text-${color}-600 dark:text-${color}-400`}>{value}</p>
        <p className="text-gray-500 dark:text-gray-400 mt-2">{subtitle}</p>
    </motion.div>
);

const TeamCard = ({ team, isExpanded, onToggle }: {
    team: Team;
    isExpanded: boolean;
    onToggle: () => void;
}) => (
    <motion.div
        variants={{
            hidden: { y: 20, opacity: 0 },
            visible: { y: 0, opacity: 1 }
        }}
        className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border-2 border-dashed border-gray-200 dark:border-gray-700 hover:border-yellow-500/50 dark:hover:border-yellow-400/50 hover:shadow-lg transition-all duration-300"
    >
        <div className="p-6 cursor-pointer" onClick={onToggle}>
            <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">{team.name}</h3>
                {isExpanded ? (
                    <ChevronDown className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                ) : (
                    <ChevronRight className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                )}
            </div>

            <div className="flex items-center mt-2">
                <Users className="w-5 h-5 text-blue-500 dark:text-blue-400 mr-2" />
                <span className="text-gray-700 dark:text-gray-300 font-medium">{team.count} Team Members</span>
                <span className="mx-2 text-gray-400 dark:text-gray-500">•</span>
                <Clock className="w-4 h-4 text-yellow-500 dark:text-yellow-400 mr-1" />
                <span className="text-gray-700 dark:text-gray-300">{team.yearsExperience} Years Avg. Experience</span>
            </div>

            <div className="mt-3 flex flex-wrap gap-2">
                {team.skills.slice(0, 3).map((skill, index) => (
                    <span key={index} className="px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-full border border-dashed border-blue-200 dark:border-blue-800">
                        {skill}
                    </span>
                ))}
                {team.skills.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full border border-dashed border-gray-200 dark:border-gray-600">
                        +{team.skills.length - 3} more
                    </span>
                )}
            </div>
        </div>

        {isExpanded && (
            <div className="px-6 pb-6 pt-2 border-t-2 border-dashed border-gray-200 dark:border-gray-700">
                <p className="text-gray-700 dark:text-gray-300 mb-4">{team.description}</p>

                <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Key Skills:</h4>
                    <div className="flex flex-wrap gap-2">
                        {team.skills.map((skill, index) => (
                            <div key={index} className="flex items-center px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm rounded-full border border-dashed border-blue-200 dark:border-blue-800">
                                <CheckCircle className="w-4 h-4 mr-1" />
                                {skill}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Certifications:</h4>
                    <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
                        {team.certifications.map((cert, index) => (
                            <li key={index} className="mb-1">{cert}</li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Notable Projects:</h4>
                    <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
                        {team.keyProjects.map((project, index) => (
                            <li key={index} className="mb-1">{project}</li>
                        ))}
                    </ul>
                </div>
            </div>
        )}
    </motion.div>
);

// Why Choose Us Card Component
const WhyChooseUsCard = ({ icon: Icon, title, description, bgColor }: {
    icon: any;
    title: string;
    description: string;
    bgColor: string;
}) => (
    <div className="bg-white/10 dark:bg-gray-800/50 backdrop-blur-md rounded-xl p-6 border-2 border-dashed border-white/20 dark:border-gray-700/50 hover:border-yellow-500/50 dark:hover:border-yellow-400/50 transition-all duration-300">
        <div className={`${bgColor} w-12 h-12 rounded-full flex items-center justify-center mb-4`}>
            <Icon className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-white/90 dark:text-gray-300">{description}</p>
    </div>
);

// Main Component
function ManPower() {
    const [activeCategory, setActiveCategory] = useState('all');
    const [expandedTeam, setExpandedTeam] = useState<number | null>(null);

    const teamCategories: TeamCategory[] = [
        { id: 'all', name: 'All Teams' },
        { id: 'construction', name: 'Construction' },
        { id: 'engineering', name: 'Engineering' },
        { id: 'management', name: 'Management' },
        { id: 'specialized', name: 'Specialized' }
    ];

    const teamData: Team[] = [
        {
            id: 1,
            name: 'Formwork & Reinforcement Team',
            count: 40,
            category: 'construction',
            skills: ['Steel Bar Bending', 'Slab Rod Placement', 'Mivan Shuttering', 'Column & Beam Formwork'],
            yearsExperience: 20,
            certifications: ['Shuttering Specialist Certification', 'Safety in Reinforcement Works'],
            description: 'Experts in slab reinforcement, bar bending, and Mivan shuttering systems. Our team ensures precise and durable structural frameworks for residential and commercial buildings.',
            keyProjects: ['High-Rise Slab Construction', 'Mivan Housing Projects', 'Commercial Complex Framework']
        }
    ];


    const filteredTeams = activeCategory === 'all'
        ? teamData
        : teamData.filter(team => team.category === activeCategory);

    const totalWorkforce = teamData.reduce((sum, team) => sum + team.count, 0);
    const avgExperience = Math.round(teamData.reduce((sum, team) => sum + team.yearsExperience, 0) / teamData.length);

    const handleTeamClick = (id: number) => {
        setExpandedTeam(expandedTeam === id ? null : id);
    };

    return (
        <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            {/* Header Section */}
            <div className="max-w-7xl mx-auto text-center mb-16">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Expert Workforce</h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                    With over <span className="font-bold text-yellow-600 dark:text-yellow-400">{totalWorkforce} skilled professionals</span> and an average of <span className="font-bold text-yellow-600 dark:text-yellow-400">{avgExperience} years of experience</span>,
                    we have the manpower and expertise to handle projects of any size and complexity.
                </p>
            </div>

            {/* Stats Overview */}
            <div className="max-w-7xl mx-auto mb-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <StatsCard
                        icon={Users}
                        title="Total Workforce"
                        value={totalWorkforce}
                        subtitle="Skilled professionals"
                        color="blue"
                    />
                    <StatsCard
                        icon={Star}
                        title="Avg. Experience"
                        value={`${avgExperience} Years`}
                        subtitle="Industry expertise"
                        color="yellow"
                    />
                    <StatsCard
                        icon={Award}
                        title="Certifications"
                        value="100%"
                        subtitle="Industry certified"
                        color="green"
                    />
                    <StatsCard
                        icon={Shield}
                        title="Safety Record"
                        value="99.8%"
                        subtitle="Incident-free projects"
                        color="purple"
                    />
                </div>
            </div>

            
            {/* Why Choose Us Section */}
            <div className="max-w-7xl mx-auto mt-20">
                <div className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-800 dark:to-blue-900 rounded-2xl shadow-xl p-8 text-white border-2 border-dashed border-white/20 dark:border-gray-700/50">
                    <h2 className="text-3xl font-bold mb-6 text-center">Why Choose Our Workforce</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <WhyChooseUsCard
                            icon={Award}
                            title="Highly Skilled"
                            description="Our rigorous hiring process ensures we employ only the most skilled professionals in the industry, each bringing years of specialized experience."
                            bgColor="bg-yellow-500"
                        />
                        <WhyChooseUsCard
                            icon={Shield}
                            title="Safety Focused"
                            description="Safety is our priority. Our teams undergo regular safety training and follow strict protocols to ensure incident-free project execution."
                            bgColor="bg-green-500"
                        />
                        <WhyChooseUsCard
                            icon={Clock}
                            title="Efficient Execution"
                            description="Our experienced workforce delivers projects on time and within budget while maintaining the highest quality standards throughout."
                            bgColor="bg-purple-500"
                        />
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className="max-w-3xl mx-auto mt-16 text-center">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Ready to work with our expert team?</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-8">
                    Contact us today to discuss how our skilled workforce can bring your construction project to life.
                </p>
                <div className="flex justify-center gap-4">
                    <button className="px-8 py-3 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-black dark:text-white font-semibold rounded-xl shadow-lg transition border-2 border-dashed border-yellow-600/30 dark:border-yellow-500/30">
                        Get a Quote
                    </button>
                    <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white font-semibold rounded-xl shadow-lg transition border-2 border-dashed border-blue-500/30 dark:border-blue-400/30">
                        Contact Us
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ManPower;