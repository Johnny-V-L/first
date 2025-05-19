import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, User, Briefcase, Menu, X, ArrowRight, Mail, Phone, Award, GraduationCap, Calendar } from 'lucide-react';

const PersonalWebsite = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMobileMenuOpen(false);
    }
  };

  const projects = [
    {
      title: "2023星海音乐会总策划",
      period: "2023.03-2023.08",
      audience: "观众规模5,000+",
      description: "统筹整体视觉设计，管理200人执行团队，负责舞台搭建和灯光效果设计",
      image: "https://s.coze.cn/t/8rMLsJtLASU/"
    },
    {
      title: "国际品牌发布会",
      period: "2022.09-2022.12",
      audience: "媒体记者300+",
      description: "策划并执行品牌全球首发活动，包括流程设计、嘉宾邀请和现场管理",
      image: "https://s.coze.cn/t/lZQVYzfUTbs/"
    },
    {
      title: "城市艺术节",
      period: "2021.05-2021.10",
      audience: "参与人数10,000+",
      description: "负责整体艺术节策划，协调50+艺术家和表演团队，设计互动体验区",
      image: "https://s.coze.cn/t/ZXpT7lWULp8/"
    }
  ];

  const experiences = [
    {
      title: "首席活动导演",
      company: "创意无限文化传媒",
      period: "2020-至今",
      description: "负责大型商业活动和文化演出的创意策划与执行管理"
    },
    {
      title: "活动策划经理",
      company: "城市文化发展中心",
      period: "2017-2020",
      description: "策划执行各类文化活动，包括艺术展览、音乐节等"
    },
    {
      title: "实习导演",
      company: "国家大剧院",
      period: "2016-2017",
      description: "参与舞台剧和音乐会的制作流程，学习专业导演技能"
    }
  ];

  const education = [
    {
      degree: "戏剧影视导演专业",
      school: "北京艺术大学",
      period: "2015-2019",
      honors: "优秀毕业生"
    }
  ];

  const skills = [
    "大型活动策划与执行",
    "舞台设计与灯光效果",
    "团队管理与协调",
    "创意方案开发",
    "预算控制与资源调配"
  ];

  return (
    <div className="min-h-screen font-sans bg-gray-50 text-gray-800">
      {/* 加载动画 */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-white z-50 flex items-center justify-center"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
              className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* 导航栏 */}
      <nav className="sticky top-0 z-40 bg-white shadow-sm">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl font-bold text-blue-600"
          >
            活动导演
          </motion.div>

          {/* 桌面导航 */}
          <div className="hidden md:flex space-x-8">
            {[
              { id: 'home', label: '主页', icon: <Home size={18} className="mr-1" /> },
              { id: 'resume', label: '个人简历', icon: <User size={18} className="mr-1" /> },
              { id: 'projects', label: '项目经验', icon: <Briefcase size={18} className="mr-1" /> }
            ].map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center px-3 py-2 rounded-md ${activeSection === item.id ? 'text-blue-600 bg-blue-50' : 'text-gray-600 hover:text-blue-500'}`}
              >
                {item.icon}
                {item.label}
              </motion.button>
            ))}
          </div>

          {/* 移动端菜单按钮 */}
          <button
            className="md:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* 移动端菜单 */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white overflow-hidden"
            >
              <div className="px-4 py-3 space-y-2">
                {[
                  { id: 'home', label: '主页', icon: <Home size={18} className="mr-2" /> },
                  { id: 'resume', label: '个人简历', icon: <User size={18} className="mr-2" /> },
                  { id: 'projects', label: '项目经验', icon: <Briefcase size={18} className="mr-2" /> }
                ].map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center w-full px-3 py-2 rounded-md ${activeSection === item.id ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-100'}`}
                  >
                    {item.icon}
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="container mx-auto px-4 py-8">
        {/* 主页 */}
        <section id="home" className="min-h-screen flex flex-col justify-center py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                创意活动导演
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                专注于大型文化活动策划与执行，用创意和专业技能打造难忘的体验
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.button
                  onClick={() => scrollToSection('projects')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  查看项目
                  <ArrowRight size={18} className="ml-2" />
                </motion.button>
                <motion.button
                  onClick={() => scrollToSection('resume')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  个人简历
                  <User size={18} className="ml-2" />
                </motion.button>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative"
            >
              <div className="w-full h-80 md:h-96 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl overflow-hidden">
                <img
                  src="https://s.coze.cn/t/3xZVqNtn_78/"
                  alt="活动导演工作场景"
                  className="w-full h-full object-cover"
                />
              </div>
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-xl"
              >
                <Award size={32} />
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* 个人简历 */}
        <section id="resume" className="min-h-screen py-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900 flex items-center justify-center">
              <User size={32} className="mr-3 text-blue-600" />
              个人简历
            </h2>

            <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
              <div className="p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="flex items-center">
                    <Mail size={20} className="text-blue-600 mr-3" />
                    <span>contact@example.com</span>
                  </div>
                  <div className="flex items-center">
                    <Phone size={20} className="text-blue-600 mr-3" />
                    <span>+86 138 0000 0000</span>
                  </div>
                  <div className="flex items-center">
                    <Award size={20} className="text-blue-600 mr-3" />
                    <span>10+年行业经验</span>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                  <Briefcase size={24} className="text-blue-600 mr-2" />
                  工作经历
                </h3>
                <div className="space-y-6">
                  {experiences.map((exp, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="pl-6 border-l-2 border-blue-200"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="text-lg font-medium text-gray-900">{exp.title}</h4>
                          <p className="text-blue-600">{exp.company}</p>
                        </div>
                        <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                          {exp.period}
                        </span>
                      </div>
                      <p className="mt-2 text-gray-600">{exp.description}</p>
                    </motion.div>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mt-10 mb-4 text-gray-800 flex items-center">
                  <GraduationCap size={24} className="text-blue-600 mr-2" />
                  教育背景
                </h3>
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="pl-6 border-l-2 border-blue-200"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="text-lg font-medium text-gray-900">{edu.degree}</h4>
                          <p className="text-blue-600">{edu.school}</p>
                        </div>
                        <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                          {edu.period}
                        </span>
                      </div>
                      {edu.honors && (
                        <div className="mt-2 flex items-center">
                          <Award size={16} className="text-yellow-500 mr-1" />
                          <span className="text-gray-600">{edu.honors}</span>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mt-10 mb-4 text-gray-800 flex items-center">
                  <Briefcase size={24} className="text-blue-600 mr-2" />
                  专业技能
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                      viewport={{ once: true }}
                      className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* 项目经验 */}
        <section id="projects" className="min-h-screen py-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900 flex items-center justify-center">
              <Briefcase size={32} className="mr-3 text-blue-600" />
              项目经验
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                      <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                        {project.period}
                      </span>
                    </div>
                    <div className="flex items-center text-sm text-blue-600 mb-3">
                      <Calendar size={14} className="mr-1" />
                      {project.audience}
                    </div>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <button className="text-blue-600 hover:text-blue-800 flex items-center text-sm font-medium">
                      查看详情
                      <ArrowRight size={14} className="ml-1" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      </main>

      {/* 页脚 */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">关于我</h3>
              <p className="mb-4">专业活动导演，专注于大型文化活动和商业活动的策划与执行。</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">快速链接</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">主页</a></li>
                <li><a href="#" className="hover:text-white transition-colors">个人简历</a></li>
                <li><a href="#" className="hover:text-white transition-colors">项目经验</a></li>
                <li><a href="#" className="hover:text-white transition-colors">联系方式</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">服务项目</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">商业活动策划</a></li>
                <li><a href="#" className="hover:text-white transition-colors">文化演出制作</a></li>
                <li><a href="#" className="hover:text-white transition-colors">品牌发布会</a></li>
                <li><a href="#" className="hover:text-white transition-colors">艺术展览策划</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">联系方式</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Mail size={16} className="mt-1 mr-2 text-blue-400" />
                  <span>contact@example.com</span>
                </li>
                <li className="flex items-start">
                  <Phone size={16} className="mt-1 mr-2 text-blue-400" />
                  <span>+86 138 0000 0000</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-800 text-center">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} 活动导演个人网站. 保留所有权利.
            </p>
            <p className="text-sm mt-2">
              <a href="https://space.coze.cn" className="text-blue-400 hover:text-blue-300">
                created by coze space
              </a>
            </p>
            <p className="text-xs mt-2 text-gray-500">
              页面内容均由 AI 生成，仅供参考
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PersonalWebsite;