'use client'
import React from "react";
import Link from "next/link";
import './page.scss';
import Image from "next/image";
import mdsvg from '../public/assets/images/md.png';
import carpng from '../public/assets/images/car.png';
import facebookicon from '../public/assets/images/facebook.svg';
import instagramicon from '../public/assets/images/instagram.svg';
import telegramicon from '../public/assets/images/telegram.svg';
import tiktokicon from '../public/assets/images/tiktok.svg';
import facebookicon_w from '../public/assets/images/facebook_w.svg';
import instagramicon_w from '../public/assets/images/instagram_w.svg';
import telegramicon_w from '../public/assets/images/telegram_w.svg';
import tiktokicon_w from '../public/assets/images/tiktok_w.svg';
import Title from "@/components/Title/Title";
import Category from "@/components/Category/Category";
import teslaimg from '../public/assets/images/tesla.png';
import bikeimg from '../public/assets/images/moto.png';
import truckimg from '../public/assets/images/truck.png';
import Review from "@/components/Review/Review";
import Advantage from "@/components/Advantage/Advantage";
import autoimg from '../public/assets/images/auto.png';
import polygonimg from '../public/assets/images/polygonimg.png';
import classimg from '../public/assets/images/class.png';
import PeopleCard from "@/components/PeopleCard/PeopleCard";
import Logo from "@/components/Logo/Logo";
import polygonstd from '../public/assets/images/polygon.std - logo.svg';
import { animate, motion, useInView, useMotionValue} from "framer-motion";
import menusvg from '../public/assets/images/Menu.svg';
import useMeasure from 'react-use-measure';

export default function Home() {
  const reviewRef = React.useRef(null);
  const isInReview = useInView(reviewRef, {once: true});
  const advantageRef = React.useRef(null);
  const isInAdvantage = useInView(advantageRef, {once: true});
  const teachersRef = React.useRef(null);
  const isInTeachers = useInView(teachersRef, {once: true});
  const instructorsRef = React.useRef(null);
  const isInInstructors = useInView(instructorsRef, {once: true});
  const mapRef = React.useRef(null);
  const isInMap = useInView(mapRef, {once: true});
  const footerRef = React.useRef(null);
  const isInFooter = useInView(footerRef, {once: true});

  const reviews = [
    {id: 0, name: 'Mihaela0', review: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`},
    {id: 1, name: 'Mihaela1', review: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`},
    {id: 2, name: 'Mihaela2', review: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}
  ];

  let [ref, {width}] = useMeasure();

  const xTranslation = useMotionValue(0);

  React.useEffect(() => {
    let controls;
    let finalPosition = -430 * 3 - 30;
    console.log(width)
    controls = animate(xTranslation, [0, finalPosition], {
      ease: "linear",
      duration: "20",
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0
    });

    return controls.stop;
  }, [xTranslation, width]);

  return (
    <div className="wrap">
      <div className="main-screen">
        <header>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <Logo />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <nav>
              <Link href={'#'}>
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  Обучение
                </motion.div>
              </Link>
              <Link href={'#'}>
                <motion.div 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    Преподаватели
                </motion.div>
              </Link>
              <Link href={'#'}>
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  Инструкторы
                </motion.div>
              </Link>
              <Link href={'#'}>
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  Билеты
                </motion.div>
              </Link>
              <Link href={'#'}>
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  Экзамен
                </motion.div>
              </Link>
              <Link href={'#'}>
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  ПДД
                </motion.div>
              </Link>
              <Link href={'#'}>
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Image
                    src={mdsvg}
                    width={20}
                    height={13}
                    quality={100}
                    alt="language"
                  />
                </motion.div>
              </Link>
            </nav>
            <motion.div 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="burger-menu"
            >
              <Image
                src={menusvg}
                width={40}
                height={30}
                quality={100}
                alt="menu"
              />
            </motion.div>
            
          </motion.div>
        </header>
        <div className="main-screen__section">
          <div className="main-screen__cta">
            <motion.div 
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <h1>Autoklas - с нами сдашь с первого раза</h1>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <p>Сядь за руль автомобиля уже сегодня</p>
            </motion.div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              className="main-screen__button"
            >
              Подробнее
            </motion.button>
          </div>
          <motion.div 
            className="main-screen__img"
            initial={{ opacity: 0, x: 0 }}
            animate={{opacity: 1, x: 0}}
          >
            <div></div>
            <Image
              src={carpng}
              quality={100}
              alt="car"
            />
          </motion.div>
        </div>
        <div className="social-links">
          <Link href={'#'}>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <Image
                src={facebookicon}
                quality={100}
                width={30}
                height={30}
                alt="icon"
              />
            </motion.div>
          </Link>
          <Link href={'#'}>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <Image
                src={instagramicon}
                quality={100}
                width={30}
                height={30}
                alt="icon"
              />
            </motion.div>
          </Link>
          <Link href={'#'}>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <Image
                src={tiktokicon}
                quality={100}
                width={30}
                height={30}
                alt="icon"
              />
            </motion.div>
          </Link>
          <Link href={'#'}>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <Image
                src={telegramicon}
                quality={100}
                width={30}
                height={30}
                alt="icon"
              />
            </motion.div>
          </Link>
        </div>
      </div>
      <div className="categories-screen">
        <Title title={'Получение категорий'} />
        <div className="categories-screen__wrap">
          <Category img={bikeimg} category={'A'} style={{backgroundColor: '#330FFF', boxShadow: '0px 5px 10px #330FFF', transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.75s"}}/>
          <Category img={teslaimg} category={'B'} style={{backgroundColor: '#ED1B23', boxShadow: '0px 5px 10px #ED1B23', transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1.50s"}}/>
          <Category img={truckimg} category={'C'} style={{backgroundColor: '#FFCC00', boxShadow: '0px 5px 10px #FFCC00', transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 2.25s"}}/>
        </div>
      </div>
      <div className="reviews-screen">
        <Title title={'Отзывы'} />
        <div 
          className="reviews-screen__wrap" 
          ref={reviewRef} 
          style={{
          opacity: isInReview ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1.5s"
        }}>
          
          <motion.div
            ref={ref}
            style={{x: xTranslation}}
            className="reviews-infinity-slider"
          >
          {
            [...reviews, ...reviews].map((review, indx) => {
              return (
                <Review 
                  key={indx}
                  name={review.name} 
                  review={review.review}
                />
              )
            })
          }
          </motion.div>
        </div>
      </div>
      <div className="advantages-screen">
        <Title title={'Наши преимущества'} />
        <div 
          className="advantages-screen__wrap"
          ref={advantageRef} 
          style={{
            opacity: isInAdvantage ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1.5s"
          }}
        >
          <Advantage 
            img={autoimg} 
            advantage={'Самый большой автопарк учебной техники'} 
            description={`Автомобили принадлежат школе, а не инструкторам. Специалисты AutoKlas следят зарегулярностью технического обслуживания и чистотой. Чтобы практический курс проходил комфортно.`}
          />
          <Advantage 
            img={polygonimg} 
            advantage={'Собственный, и самый большой автодром на севере Молдовы'} 
            description={`Наши ученики не стоят в очереди на уроках вождения, а все время занятия отрабатывают упражнения на авто автошколы.`}
          />
          <Advantage 
            img={classimg} 
            advantage={'Светлые оборудованные классы'} 
            description={`В учебных помещениях AutoKlas есть все, чтобы получать знания и осваивать ПДД: удобная мебель, справочные материалы, мультимедийное оборудование.`}
          />
        </div>
      </div>
      <div className="teachers-screen">
        <Title title={'Преподаватели'} />
        <div className="teachers-screen__wrap"
          ref={teachersRef} 
          style={{
            opacity: isInTeachers ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1.5s"
          }}
        >
          <PeopleCard name={'Marina Lipec'}/>
          <PeopleCard name={'Marina Lipec'}/>
          <PeopleCard name={'Marina Lipec'}/>
        </div>
      </div>
      <div className="instructors-screen">
        <Title title={'Инструкторы'} />
        <div className="instructors-screen__wrap"
          ref={instructorsRef} 
          style={{
            opacity: isInInstructors ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1.5s"
          }}
        >
          <PeopleCard name={'Marina Lipec'}/>
          <PeopleCard name={'Marina Lipec'}/>
          <PeopleCard name={'Marina Lipec'}/>
        </div>
      </div>
      <div className="map-screen">
        <Title title={'Где мы находимся ?'} />
        <div className="map-screen__wrap" 
          ref={mapRef} 
          style={{
            opacity: isInMap ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1.5s"
          }}
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10726.885523837866!2d27.9379555!3d47.7674584!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40cb6144c6f2b96b%3A0x77134c957dcf2ee7!2sAutoKlas!5e0!3m2!1sru!2s!4v1730213255208!5m2!1sru!2s" 
            className="map" 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade" 
          />
        </div>
      </div>
      <footer>
        <div 
          className="footer__wrap"
          ref={footerRef} 
          style={{
            opacity: isInFooter ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1s"
          }}
        >
          <Logo style={'white'}/>
          <p>Мы - команда профессионалов, которая стремится к созданию качественных решений для наших клиентов. Наша цель - помочь вам достичь успеха в вашем деле.</p>
          <div className="footer__social-links">
            <Link href={'#'}>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Image
                  src={facebookicon_w}
                  quality={100}
                  width={30}
                  height={30}
                  alt="icon"
                />
              </motion.div>
            </Link>
            <Link href={'#'}>
            <motion.div 
              whileHover={{scale: 1.1}}
              whileTap={{scale: 0.9}}
            >
              <Image
                src={instagramicon_w}
                quality={100}
                width={30}
                height={30}
                alt="icon"
              />
            </motion.div>
            </Link>
            <Link href={'#'}>
            <motion.div 
              whileHover={{scale: 1.1}}
              whileTap={{scale: 0.9}}
            >
              <Image
                src={tiktokicon_w}
                quality={100}
                width={30}
                height={30}
                alt="icon"
              />
            </motion.div>
            </Link>
            <Link href={'#'}>
            <motion.div 
              whileHover={{scale: 1.1}}
              whileTap={{scale: 0.9}}
            >
              <Image
                src={telegramicon_w}
                quality={100}
                width={30}
                height={30}
                alt="icon"
              />
            </motion.div>
            </Link>

            <Link href={'#'} className="polygon-std-logo">
            <motion.div 
              whileHover={{scale: 1.1}}
              whileTap={{scale: 0.9}}
            >
              <Image
                src={polygonstd}
                quality={100}
                alt="icon"
              />
            </motion.div>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
