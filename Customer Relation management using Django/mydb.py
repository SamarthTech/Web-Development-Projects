import mysql.connector

dataBase=mysql.connector.connect(
    host='localhost',
    user='root',
    passwd='root123'
)


cursorObject=dataBase.cursor()

cursorObject.execute(" CREATE DATABASE sanketh")


print("All Done")