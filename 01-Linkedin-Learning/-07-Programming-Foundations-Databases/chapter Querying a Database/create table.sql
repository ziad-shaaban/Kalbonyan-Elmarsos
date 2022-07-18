CREATE TABLE `Customers` (
  `CustomerID` int(6) NOT NULL AUTO_INCREMENT,
  `FirstName` varchar(200) NOT NULL DEFAULT '',
  `LastName` varchar(200) NOT NULL DEFAULT '',
  `Email` varchar(200) DEFAULT NULL,
  `Address` varchar(200) DEFAULT NULL,
  `City` varchar(200) DEFAULT NULL,
  `State` char(2) DEFAULT NULL,
  `Phone` varchar(20) NOT NULL DEFAULT '',
  `Birthday` date DEFAULT NULL,
  `FavoriteDish` int(6) DEFAULT NULL,
  PRIMARY KEY (`CustomerID`)
);