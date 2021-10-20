CREATE DATABASE  IF NOT EXISTS `meal-sharing`;
USE `meal-sharing`;
--
-- Table structure for table `meals`
--

DROP TABLE IF EXISTS `meals`;
CREATE TABLE `meals` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(45) DEFAULT NULL,
  `description` varchar(1028) DEFAULT NULL,
  `location` varchar(45) DEFAULT NULL,
  `when` DATE DEFAULT NULL,
  `price` int DEFAULT NULL,
  `max_reservations` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6;

DROP TABLE IF EXISTS `reservations`;
CREATE TABLE `reservations` (
  `id` int NOT NULL AUTO_INCREMENT,
  `meal_id` int NOT NULL,
  `number_of_guests` int NOT NULL,
  `contact_phonenumber` int NOT NULL,
  `contact_name` varchar(45) DEFAULT NULL,
  `contact_email` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6;


--
-- Dumping data for table `meals`
--

LOCK TABLES `meals` WRITE;
/*!40000 ALTER TABLE `meals` DISABLE KEYS */;
INSERT INTO `meals` VALUES (1,'test meal',3),(2,'test meal 2',3),(3,'test meal 3',7)
/*!40000 ALTER TABLE `meals` ENABLE KEYS */;
UNLOCK TABLES;
