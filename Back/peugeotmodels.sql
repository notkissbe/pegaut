-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2024. Ápr 19. 09:23
-- Kiszolgáló verziója: 10.4.25-MariaDB
-- PHP verzió: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `pejodatabase`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `peugeotmodels`
--

CREATE TABLE `peugeotmodels` (
  `Model` varchar(50) DEFAULT NULL,
  `Type` varchar(50) DEFAULT NULL,
  `Year` int(11) DEFAULT NULL,
  `EngineType` varchar(50) DEFAULT NULL,
  `RangeDistance` varchar(50) DEFAULT NULL,
  `kepLink` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- A tábla adatainak kiíratása `peugeotmodels`
--

INSERT INTO `peugeotmodels` (`Model`, `Type`, `Year`, `EngineType`, `RangeDistance`, `kepLink`) VALUES
('107', 'Hatchback', 2005, '1.0L Petrol', '450 km', ''),
('206', 'Hatchback', 2005, '1.4L Diesel', '500 km', ''),
('208', 'Hatchback', 2005, '1.6L Petrol', '550 km', ''),
('301', 'Sedan', 2005, '1.6L Diesel', '600 km', ''),
('308', 'Hatchback', 2005, '2.0L Petrol', '650 km', ''),
('407', 'Sedan', 2010, '2.2L Petrol', '700 km', ''),
('508', 'Wagon', 2010, '2.0L Petrol', '750 km', ''),
('607', 'Sedan', 2010, '2.2L Petrol', '800 km', ''),
('1007', 'Hatchback', 2005, '1.4L Petrol', '850 km', ''),
('2008', 'SUV', 2013, '1.6L Petrol', '900 km', ''),
('3008', 'SUV', 2005, '1.6L Diesel', '950 km', ''),
('4007', 'SUV', 2005, '2.0L Petrol', '1000 km', ''),
('5008', 'MPV', 2017, '1.6L Diesel', '1050 km', ''),
('Partner', 'Van', 2005, '1.6L Petrol', '1100 km', ''),
('Expert', 'Van', 2005, '1.6L Diesel', '1150 km', ''),
('Boxer', 'Van', 2005, '2.0L Petrol', '1200 km', ''),
('206 CC', 'Convertible', 2005, '1.6L Petrol', '1250 km', ''),
('307 SW', 'Wagon', 2005, '2.0L Petrol', '1300 km', ''),
('308 CC', 'Convertible', 2005, '2.0L Petrol', '1350 km', ''),
('RCZ', 'Coupe', 2012, '1.6L Petrol', '1400 km', ''),
('4008', 'SUV', 2015, '1.6L Petrol', '1450 km', ''),

COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
