public class Main {
    public static void public static void main(String[] args) {
        DBAdapter dbAdapter = DBFactory.getDBAdapter(DBFactory.DBType.MySQL);
        Connection connection = dbAdapter.getConnection();
        Statement statement = connection.createStatement();
        statement.execute("SELECT * FROM XXXX");
    }
}