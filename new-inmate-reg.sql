-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 13, 2022 at 04:04 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `new-inmate-reg`
--

-- --------------------------------------------------------

--
-- Table structure for table `new_inmate_reg`
--

CREATE TABLE `new_inmate_reg` (
  `id` int(100) NOT NULL,
  `First_Name` text NOT NULL,
  `Last_Name` text NOT NULL,
  `Other_Name` text NOT NULL,
  `DOB` date NOT NULL,
  `Age` varchar(15) NOT NULL,
  `State` varchar(100) NOT NULL,
  `Court` text NOT NULL,
  `DateOfAdmission` date NOT NULL,
  `LGA` text NOT NULL,
  `Height` varchar(110) NOT NULL,
  `Weight` varchar(100) NOT NULL,
  `Complextion` varchar(100) NOT NULL,
  `Tribalmark` varchar(100) NOT NULL,
  `Eye_color` varchar(100) NOT NULL,
  `Hair_color` varchar(100) NOT NULL,
  `Offence` varchar(500) NOT NULL,
  `Sentence_type` varchar(100) NOT NULL,
  `Sentence_duration` varchar(100) NOT NULL,
  `Sentence_calender` varchar(100) NOT NULL,
  `Court_return` varchar(100) NOT NULL,
  `gender` varchar(100) NOT NULL,
  `Cell_No` varchar(100) NOT NULL,
  `Prison_Number` varchar(100) NOT NULL,
  `Legal_Aid` varchar(100) NOT NULL,
  `CorrectionCenter` varchar(100) NOT NULL,
  `DateToBeTakenToCourt` varchar(100) NOT NULL,
  `nationality` varchar(100) NOT NULL,
  `Religion` varchar(100) NOT NULL,
  `Tribe` varchar(100) NOT NULL,
  `Disability` varchar(100) NOT NULL,
  `Healthstatus` varchar(1000) NOT NULL,
  `Inmatetype` varchar(100) NOT NULL,
  `Status` varchar(100) NOT NULL,
  `Warrant` varchar(500) NOT NULL,
  `Amount` varchar(100) NOT NULL,
  `Unit` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `new_inmate_reg`
--

INSERT INTO `new_inmate_reg` (`id`, `First_Name`, `Last_Name`, `Other_Name`, `DOB`, `Age`, `State`, `Court`, `DateOfAdmission`, `LGA`, `Height`, `Weight`, `Complextion`, `Tribalmark`, `Eye_color`, `Hair_color`, `Offence`, `Sentence_type`, `Sentence_duration`, `Sentence_calender`, `Court_return`, `gender`, `Cell_No`, `Prison_Number`, `Legal_Aid`, `CorrectionCenter`, `DateToBeTakenToCourt`, `nationality`, `Religion`, `Tribe`, `Disability`, `Healthstatus`, `Inmatetype`, `Status`, `Warrant`, `Amount`, `Unit`) VALUES
(1, 'halima', 'hadi', 'kawata', '0000-00-00', '19', 'Kano ', 'high court', '0000-00-00', 'tarauni', '158', '56', 'moderate brown', 'no', 'brown', 'black', 'murder', 'Convict with fine', '0 years, 1 months, 4 weeks, 29.666666666666664 days', 'Ordinary sentence', '2022-06-23', 'female', '88', 'KSP/KUR/22/1', 'yes', 'Medium', '2022-06-23', 'NIGERIA', 'muslim', 'fulani', 'none', 'healthy', 'Convict', 'On sentence', '', '6', 'Month'),
(2, '', '', '', '0000-00-00', '', '', '', '2022-06-15', '', '', '', '', '', '', '', '', '', '0 years, 0 months, 0 weeks, 0 days', '', '', '', '', 'KSP/KUR/22/2', '', 'undefined', 'undefined', '', '', '', '', '', '', 'undefined', '', '', 'undefined');

-- --------------------------------------------------------

--
-- Table structure for table `nigerianstates`
--

CREATE TABLE `nigerianstates` (
  `Country` varchar(8) DEFAULT NULL,
  `State` varchar(12) DEFAULT NULL,
  `StateCode` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `nigerianstates`
--

INSERT INTO `nigerianstates` (`Country`, `State`, `StateCode`) VALUES
('NIGERIA', 'Plateau ', '3'),
('Nigeria ', ' Enugu ', '5'),
('Nigeria ', ' FCT ', '6'),
('NIGERIA', 'Lagos ', 'NG-100000'),
('NIGERIA', 'Ogun ', 'NG-110000'),
('NIGERIA', 'Oyo ', 'NG-210000'),
('NIGERIA', 'Osun ', 'NG-220000'),
('NIGERIA', 'Kwara ', 'NG-240000'),
('NIGERIA', 'Kogi ', 'NG-260000'),
('NIGERIA', 'Edo ', 'NG-300000'),
('NIGERIA', 'Delta ', 'NG-320000'),
('NIGERIA', 'Ondo ', 'NG-340000'),
('NIGERIA', 'Ekiti ', 'NG-360000'),
('NIGERIA', 'Abia ', 'NG-400000'),
('NIGERIA', 'Anambra ', 'NG-420000'),
('NIGERIA', 'Imo ', 'NG-460000'),
('NIGERIA', 'Ebonyi ', 'NG-480000'),
('NIGERIA', 'Rivers ', 'NG-500000'),
('NIGERIA', 'Bayelsa ', 'NG-510000'),
('NIGERIA', 'Akwa Ibom ', 'NG-521000'),
('NIGERIA', 'Cross River ', 'NG-540000'),
('NIGERIA', 'Borno ', 'NG-600000'),
('NIGERIA', 'Yobe ', 'NG-620000'),
('NIGERIA', 'Adamawa ', 'NG-640000'),
('NIGERIA', 'Taraba ', 'NG-660000'),
('NIGERIA', 'Jigawa ', 'NG-705000'),
('NIGERIA', 'Kano ', 'NG-710000'),
('NIGERIA', 'Bauchi ', 'NG-740000'),
('NIGERIA', 'Gombe ', 'NG-760000'),
('NIGERIA', 'Kaduna ', 'NG-800000'),
('NIGERIA', 'Katsina ', 'NG-820000'),
('NIGERIA', 'Sokoto ', 'NG-840000'),
('NIGERIA', 'Kebbi ', 'NG-860000'),
('NIGERIA', 'Zamfara ', 'NG-882000'),
('NIGERIA', 'Abuja ', 'NG-905000'),
('NIGERIA', 'Niger ', 'NG-910000'),
('NIGERIA', 'Nassarawa ', 'NG-930000'),
('NIGERIA', 'Benue ', 'NG-970000');

-- --------------------------------------------------------

--
-- Table structure for table `number_generator`
--

CREATE TABLE `number_generator` (
  `id` int(11) NOT NULL,
  `description` varchar(50) NOT NULL,
  `code` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `number_generator`
--

INSERT INTO `number_generator` (`id`, `description`, `code`) VALUES
(1, 'prison_no', 2);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `firstname` varchar(255) DEFAULT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `new_inmate_reg`
--
ALTER TABLE `new_inmate_reg`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `number_generator`
--
ALTER TABLE `number_generator`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `new_inmate_reg`
--
ALTER TABLE `new_inmate_reg`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `number_generator`
--
ALTER TABLE `number_generator`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
