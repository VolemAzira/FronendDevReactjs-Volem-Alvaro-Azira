-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 07, 2023 at 09:33 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `restaurants_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `restaurants`
--

CREATE TABLE `restaurants` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `categories` varchar(255) DEFAULT NULL,
  `rating` float DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `restaurants`
--

INSERT INTO `restaurants` (`id`, `name`, `categories`, `rating`, `price`, `status`, `description`, `image`, `url`, `createdAt`, `updatedAt`) VALUES
(1, 'Hokben', 'Japan', 4, 'Rp. 50.000 - Rp. 100.000', 'open', 'mantap', '1693982219784.png', 'http://localhost:3000/images/1693982219784.png', '2023-09-06 06:36:59', '2023-09-06 06:36:59'),
(2, 'Solaria', 'Indonesian', 3, 'Rp. 50.000 - Rp. 100.000', 'close', 'enaken', '1693982163567.png', 'http://localhost:3000/images/1693982163567.png', '2023-09-06 05:27:05', '2023-09-06 06:36:03'),
(4, 'Pizza Hut', 'Indonesian', 5, 'Rp. 100.000 - Rp. 200.000', 'close', 'Mau Makan Pasta Enak, Pizza Enak, Minum Enak, semua jelas ada di Pizza Hut.', '1693992310180.png', 'http://localhost:3000/images/1693992310180.png', '2023-09-06 06:37:36', '2023-09-06 09:25:10'),
(5, 'McDonald\'s', 'American', 4, 'Rp. 50.000 - Rp. 100.000', 'open', 'Nikmati banyak pilihan menu nikmat berkualitas, hanya di McD! Cobain menu terbaru dari McDonald\'s sekarang!', '1693992134736.png', 'http://localhost:3000/images/1693992134736.png', '2023-09-06 09:22:14', '2023-09-06 09:22:14'),
(6, 'Mie Gacoan', 'Indonesian', 5, 'Rp. 0 - Rp. 50.000', 'open', ' 𝙈𝙄𝙀 𝙋𝙀𝘿𝘼𝙎 𝙉𝙤.1 𝙙𝙞 𝙄𝙣𝙙𝙤𝙣𝙚𝙨𝙞𝙖', '1693992433914.png', 'http://localhost:3000/images/1693992433914.png', '2023-09-06 09:27:13', '2023-09-06 09:27:13'),
(7, 'Pagi Sore', 'Indonesian', 4, 'Rp. 0 - Rp. 50.000', 'open', 'Pagi Sore telah berdiri sejak tahun 1973, dan terus mengembangkan diri untuk memastikan cita rasa dan kualitas terbaik.', '1693997142220.jpg', 'http://localhost:3000/images/1693997142220.jpg', '2023-09-06 10:45:42', '2023-09-06 10:45:42'),
(8, 'Tom Sushi', 'Japan', 3, 'Rp. 0 - Rp. 50.000', 'open', 'Tom Sushi adalah restoran Jepang yang mengusung konsep simplicity dengan harga yang terjangkau dan penyajian yang cepat.', '1694002567062.jpg', 'http://localhost:3000/images/1694002567062.jpg', '2023-09-06 12:16:07', '2023-09-06 12:16:07'),
(9, 'Dunkin Donuts', 'American', 4, 'Rp. 100.000 - Rp. 200.000', 'close', 'founded in 1950, is the largest coffee and donuts brand in the United States, with more than 13,200 restaurants in nearly 40 global markets.', '1694003187488.png', 'http://localhost:3000/images/1694003187488.png', '2023-09-06 12:26:27', '2023-09-06 12:26:27');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `restaurants`
--
ALTER TABLE `restaurants`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `restaurants`
--
ALTER TABLE `restaurants`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
