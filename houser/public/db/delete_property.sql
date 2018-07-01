

DELETE FROM properties
WHERE propertyid = $1;

SELECT * FROM properties;