-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Feb 06, 2022 at 07:16 PM
-- Server version: 5.7.24
-- PHP Version: 8.0.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cst-391`
--

-- --------------------------------------------------------

--
-- Table structure for table `movies`
--

CREATE TABLE `movies` (
  `id` int(11) NOT NULL,
  `title` varchar(45) NOT NULL,
  `genre` varchar(45) NOT NULL,
  `price` decimal(11,2) NOT NULL,
  `quantity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `movies`
--

INSERT INTO `movies` (`id`, `title`, `genre`, `price`, `quantity`) VALUES
(1, 'Swedish Auto', 'Drama|Romance', '15.00', 89),
(2, 'Quadrophenia', 'Drama|Musical', '16.60', 52),
(3, 'Blood and Roses (Et mourir de plaisir) (To Di', 'Horror', '6.80', 59),
(4, 'Repatriation', 'Documentary', '11.41', 58),
(5, 'Joyriders, The', 'Drama', '12.94', 22),
(6, 'Cirque du Soleil: Varekai', 'Comedy|Fantasy|Musical|Mystery', '14.74', 17),
(7, 'Best Man Down', 'Drama', '6.19', 25),
(8, 'Lt. Robin Crusoe, U.S.N.', 'Adventure|Comedy', '14.66', 60),
(9, 'Canterbury Tale, A', 'Drama|Mystery|War', '18.00', 52),
(10, 'Grim Reaper', 'Horror', '23.89', 68),
(11, 'Chappie', 'Action|Thriller', '15.00', 59),
(12, 'Law of Desire (Ley del deseo, La)', 'Comedy|Drama|Romance', '19.09', 59),
(13, 'Transcendent Man', 'Documentary', '18.47', 14),
(14, 'Georgia', 'Drama', '11.96', 96),
(15, 'Resurrected, The', 'Horror', '20.09', 48),
(16, 'Flipper', 'Adventure|Children|Drama', '23.73', 1),
(17, 'Dominion Tank Police (Dominion)', 'Action|Animation|Comedy|Sci-Fi', '20.48', 73),
(18, 'Where Angels Go, Trouble Follows', 'Comedy', '11.83', 40),
(19, 'Sorrow and the Pity, The (Le chagrin et la pi', 'Documentary|War', '10.40', 35),
(20, 'Made in Heaven', 'Fantasy|Romance', '23.04', 29),
(21, 'Coco Before Chanel (Coco avant Chanel)', 'Drama', '6.56', 42),
(22, '3 Idiots', 'Comedy|Drama|Romance', '13.26', 18),
(23, 'Victim', 'Horror|Thriller', '9.47', 29),
(24, 'Shalako', 'Western', '5.50', 67),
(25, 'Decoy', 'Crime|Drama|Film-Noir', '20.04', 95),
(26, 'Sweetgrass', 'Adventure|Documentary|Western', '11.22', 97),
(27, 'Patience (After Sebald)', 'Documentary', '20.27', 85),
(28, 'Iceman Cometh, The', 'Drama', '8.93', 26),
(29, 'Moine, Le (Monk, The)', 'Drama|Mystery|Thriller', '15.20', 79),
(30, 'Ninth Gate, The', 'Fantasy|Horror|Mystery|Thriller', '21.40', 75),
(31, 'Reach the Rock', 'Comedy|Drama', '18.27', 6),
(32, 'A.K.A. Don Bonus', 'Documentary', '6.53', 6),
(33, 'Rio 2', 'Adventure|Animation|Children|Comedy', '23.54', 69),
(34, 'The Girl from Nagasaki', 'Drama|Romance', '22.49', 50),
(35, 'Sophie\'s Revenge (Fei chang wan mei)', 'Comedy|Romance', '6.74', 41),
(36, 'Presto', 'Animation|Children|Comedy|Fantasy', '23.61', 24),
(37, 'American Soldier, The (Der amerikanische Sold', 'Drama', '10.37', 71),
(38, 'Silmido', 'Action|Drama|War', '19.89', 73),
(39, '8MM 2', 'Drama|Mystery|Thriller', '14.10', 16),
(40, 'If I Stay', 'Drama', '7.42', 48),
(41, 'Marius', 'Comedy|Drama|Romance', '12.13', 81),
(42, 'Slap Shot 2: Breaking the Ice', 'Comedy', '23.00', 80),
(43, 'The Flower in His Mouth', 'Drama|Mystery', '20.89', 74),
(44, 'Jagged Edge', 'Crime|Romance|Thriller', '15.56', 53),
(45, 'Town Without Pity', 'Drama', '24.96', 49),
(46, '5x2', 'Drama|Romance', '12.12', 21),
(47, 'Endless Love', 'Drama|Romance', '7.06', 1),
(48, 'White Mountains (Belyie gory)', 'Drama', '19.50', 5),
(49, 'Quartet', 'Comedy|Drama', '5.98', 82),
(50, 'Gamera vs. Jiger', 'Action|Fantasy|Sci-Fi', '10.36', 10),
(51, 'Happiest Days of Your Life, The', 'Comedy', '5.39', 86),
(52, 'Everyone Says I Love You', 'Comedy|Musical|Romance', '8.31', 3),
(53, 'No One Knows About Persian Cats (Kasi az gorb', 'Drama', '20.11', 2),
(54, 'Buena Vista Social Club', 'Documentary|Musical', '9.90', 56),
(55, 'Trailer Park Boys: Don\'t Legalize It', 'Comedy|Crime|Drama', '11.53', 69),
(56, '12 Dogs of Christmas, The', 'Children', '6.94', 86),
(57, 'Dog, The', 'Documentary', '16.29', 92),
(58, 'Nightmare Castle (Amanti d\'oltretomba) (Lover', 'Horror', '9.05', 20),
(59, 'Party 2, The (Boum 2, La)', 'Comedy|Romance', '5.57', 13),
(60, 'Nixon', 'Drama', '20.99', 5),
(61, 'Lonely Hearts', 'Crime|Drama|Thriller', '17.25', 32),
(62, 'Illusionist, The (L\'illusionniste)', 'Animation', '14.55', 77),
(63, 'Moment of Innocence, A (Nun va Goldoon)', 'Drama', '12.58', 68),
(64, 'Blondie of the Follies', 'Comedy', '17.65', 15),
(65, 'Broadway Damage', 'Comedy', '13.39', 73),
(66, 'Young Frankenstein', 'Comedy|Fantasy', '16.36', 99),
(67, 'Naked Violence', 'Crime|Drama', '14.37', 4),
(68, 'Comic Book Villains', 'Comedy', '17.88', 59),
(69, 'Pin...', 'Horror', '5.91', 75),
(70, 'Last Orders', 'Drama', '24.35', 20),
(71, 'Yellow Cab Man, The', 'Comedy|Drama|Romance', '12.52', 49),
(72, 'Princess Raccoon (Operetta tanuki goten)', 'Comedy|Fantasy|Musical|Romance', '16.75', 18),
(73, 'Myth of the American Sleepover, The', 'Comedy|Drama|Romance', '17.46', 32),
(74, 'LEGO Batman: The Movie - DC Heroes Unite', 'Action|Adventure|Animation', '18.97', 52),
(75, 'Vacancy 2: The First Cut', 'Horror|Thriller', '10.29', 14),
(76, 'Valley of the Dolls', 'Drama', '24.90', 100),
(77, 'Martin & Orloff', 'Comedy', '15.04', 89),
(78, 'Querelle', 'Drama', '8.68', 91),
(79, 'Touch the Top of the World', 'Drama', '8.95', 38),
(80, 'Farewell, The (Abschied - Brechts letzter Som', 'Drama', '15.21', 92),
(81, 'Peas at 5:30 (Erbsen auf halb 6)', 'Comedy|Drama|Romance', '8.69', 36),
(82, 'Moon 44', 'Action|Film-Noir|Sci-Fi|Thriller', '6.57', 15),
(83, 'Satyricon', 'Drama', '9.28', 31),
(84, 'Play Time (a.k.a. Playtime)', 'Comedy', '18.23', 27),
(85, 'Adventures of Rocky and Bullwinkle, The', 'Adventure|Animation|Children|Comedy|Fantasy', '18.94', 98),
(86, 'Generale Della Rovere, Il', 'Drama', '11.20', 28),
(87, 'Agora', 'Adventure|Drama|Romance', '22.13', 70),
(88, 'G', 'Drama|Romance', '16.22', 26),
(89, 'Gunman\'s Walk ', 'Western', '15.23', 93),
(90, 'Sea of Grass, The', 'Drama|Western', '19.66', 13),
(91, 'Little Big Soldier (Da bing xiao jiang)', 'Action|Adventure|Comedy|Drama|War', '9.33', 35),
(92, 'Shadowlands', 'Drama|Romance', '18.27', 34),
(93, 'Ernest Goes to School', 'Children|Comedy|Drama', '19.74', 39),
(94, 'Send Me No Flowers', 'Comedy|Romance', '18.06', 3),
(95, 'Apnea (Apnoia)', 'Drama', '8.08', 35),
(96, 'Rasen', 'Drama|Fantasy|Horror|Mystery|Thriller', '21.09', 0),
(97, '8 ½ Women (a.k.a. 8 1/2 Women) (a.k.a. Eight ', 'Comedy', '20.63', 40),
(98, '10.5', 'Action|Drama', '23.97', 84),
(99, 'Images of the World and the Inscription of Wa', 'Documentary|War', '11.55', 59),
(100, 'Imitation of Life', 'Drama|Romance', '8.79', 15),
(101, 'mikes movie', 'Drama|Fantasy|Horror|Mystery|Thriller', '120.01', 0),
(102, 'Rasen', 'Drama|Fantasy|Horror|Mystery|Thriller', '21.09', 0),
(103, 'Rasen', 'Drama|Fantasy|Horror|Mystery|Thriller', '21.09', 0),
(104, 'Rasen', 'Drama|Fantasy|Horror|Mystery|Thriller', '21.09', 0),
(105, 'Rasen', 'Drama|Fantasy|Horror|Mystery|Thriller', '21.00', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `movies`
--
ALTER TABLE `movies`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `movies`
--
ALTER TABLE `movies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=106;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
