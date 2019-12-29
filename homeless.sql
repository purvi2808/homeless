-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 29, 2019 at 01:53 PM
-- Server version: 10.4.10-MariaDB
-- PHP Version: 7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `homeless`
--

-- --------------------------------------------------------

--
-- Table structure for table `event_organised_photo`
--

CREATE TABLE `event_organised_photo` (
  `photo_id` int(200) NOT NULL,
  `event_id` int(200) NOT NULL,
  `photo` longblob NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `ngo_event_organised`
--

CREATE TABLE `ngo_event_organised` (
  `event_id` int(200) NOT NULL,
  `unique_id` varchar(200) NOT NULL,
  `caption` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `ngo_future_event`
--

CREATE TABLE `ngo_future_event` (
  `event_id` int(100) NOT NULL,
  `photo` varchar(200) NOT NULL,
  `latitude` decimal(4,2) NOT NULL,
  `longitude` decimal(4,2) NOT NULL,
  `description` mediumtext NOT NULL,
  `unique_id` varchar(100) NOT NULL,
  `address` varchar(10000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `ngo_future_event`
--

INSERT INTO `ngo_future_event` (`event_id`, `photo`, `latitude`, `longitude`, `description`, `unique_id`, `address`) VALUES
(1, '', '11.22', '22.33', 'event is going to be organised', '22', 'US'),
(2, '', '11.22', '22.33', 'event is going to be organised', '88', 'US'),
(3, 'dcsdfsdvsv', '11.22', '22.33', 'postman event going to be hold', '22', 'jhansi');

-- --------------------------------------------------------

--
-- Table structure for table `ngo_notifications`
--

CREATE TABLE `ngo_notifications` (
  `notification_id` int(11) NOT NULL,
  `text` varchar(2000) NOT NULL,
  `is_read` tinyint(1) NOT NULL,
  `unique_id` varchar(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `ngo_notifications`
--

INSERT INTO `ngo_notifications` (`notification_id`, `text`, `is_read`, `unique_id`) VALUES
(1, 'notificatio', 0, 'NGO1'),
(2, 'notidfdffgfgnhghdfdhgfnfgfgdfication1', 0, 'NGO1'),
(3, 'notidfdffgfgnhghdfdhgfnfgfgdfication1', 0, 'NGO1'),
(4, 'n2gfgdfication1', 0, 'NGO1');

-- --------------------------------------------------------

--
-- Table structure for table `ngo_register`
--

CREATE TABLE `ngo_register` (
  `NGO_name` varchar(20) NOT NULL,
  `unique_id` varchar(20) NOT NULL,
  `category` varchar(20) NOT NULL,
  `mobile` int(10) NOT NULL,
  `password` varchar(20) NOT NULL,
  `latitude` decimal(4,2) NOT NULL,
  `longitude` decimal(4,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `ngo_register`
--

INSERT INTO `ngo_register` (`NGO_name`, `unique_id`, `category`, `mobile`, `password`, `latitude`, `longitude`) VALUES
('NGO7', '03', 'homeless', 1234567880, 'mynameiskhan', '11.22', '22.33'),
('NGO7', '12345', 'homeless', 1234567880, 'mynameiskhan', '11.22', '22.33'),
('NGO1', '12345678', 'medical', 1234567890, '1234567890', '0.00', '0.00'),
('NGO1', '1234567890', 'medical', 1234567890, '1234567890', '1.00', '1.00'),
('NGO3', '12347890', 'homeless', 1234567890, '1234567890', '1.00', '1.00'),
('NGO7', '1235', 'homeless', 1234567880, 'mynameiskhan', '11.22', '22.33'),
('NGO7', '12387875', 'homeless', 1234567880, 'mynameiskhan', '11.22', '22.33'),
('NGO3', '1347890', 'homeless', 1234567890, '1234567890', '1.00', '1.00'),
('NGO4', '1357890', 'homeless', 1234567890, '1234567890', '11.22', '22.33'),
('NGO5', '1367890', 'homeless', 1234567890, '1234567890', '11.22', '22.33'),
('NGO7', '22', 'homeless', 1234567880, 'mynameiskhan', '11.22', '22.33'),
('NGO7', '23', 'homeless', 1234567880, 'mynameiskhan', '11.22', '22.33'),
('NGO7', '34', 'homeless', 1234567880, 'mynameiskhan', '11.22', '22.33'),
('NGO7', '8171', 'homeless', 1234567880, 'mynameiskhan', '11.22', '22.33'),
('NGO7', '84', 'homeless', 1234567880, 'mynameiskhan', '11.22', '22.33'),
('NGO7', '9897693066', 'homeless', 1234567880, 'mynameiskhan', '11.22', '22.33');

-- --------------------------------------------------------

--
-- Table structure for table `ngo_subscribers`
--

CREATE TABLE `ngo_subscribers` (
  `subscriber_id` int(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `unique_id` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `ngo_subscribers`
--

INSERT INTO `ngo_subscribers` (`subscriber_id`, `name`, `unique_id`) VALUES
(1, 'user1', '22'),
(2, 'user1', '88');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `event_organised_photo`
--
ALTER TABLE `event_organised_photo`
  ADD PRIMARY KEY (`photo_id`);

--
-- Indexes for table `ngo_event_organised`
--
ALTER TABLE `ngo_event_organised`
  ADD PRIMARY KEY (`event_id`);

--
-- Indexes for table `ngo_future_event`
--
ALTER TABLE `ngo_future_event`
  ADD PRIMARY KEY (`event_id`);

--
-- Indexes for table `ngo_notifications`
--
ALTER TABLE `ngo_notifications`
  ADD PRIMARY KEY (`notification_id`);

--
-- Indexes for table `ngo_register`
--
ALTER TABLE `ngo_register`
  ADD PRIMARY KEY (`unique_id`);

--
-- Indexes for table `ngo_subscribers`
--
ALTER TABLE `ngo_subscribers`
  ADD PRIMARY KEY (`subscriber_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `event_organised_photo`
--
ALTER TABLE `event_organised_photo`
  MODIFY `photo_id` int(200) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ngo_event_organised`
--
ALTER TABLE `ngo_event_organised`
  MODIFY `event_id` int(200) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ngo_future_event`
--
ALTER TABLE `ngo_future_event`
  MODIFY `event_id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `ngo_notifications`
--
ALTER TABLE `ngo_notifications`
  MODIFY `notification_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `ngo_subscribers`
--
ALTER TABLE `ngo_subscribers`
  MODIFY `subscriber_id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
