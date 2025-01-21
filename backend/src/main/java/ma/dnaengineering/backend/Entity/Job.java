package ma.dnaengineering.backend.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.type.descriptor.jdbc.DecimalJdbcType;
import org.w3c.dom.Text;

import java.sql.Timestamp;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name="students")
public class Job {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    public Long id;
    public String title;
    public String description;
    public String location;
    public DecimalJdbcType salary;
    public Timestamp postedAt;
    public Timestamp updatedAt;

}
