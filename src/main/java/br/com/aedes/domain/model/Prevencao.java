package br.com.aedes.domain.model;

import java.io.Serializable;
import java.util.Calendar;
import java.util.Date;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import lombok.EqualsAndHashCode;
import lombok.ToString;

@Entity
@EqualsAndHashCode
@ToString
public class Prevencao implements Comparable<Prevencao>, Serializable{
	private static final long serialVersionUID = 2294204926764998765L;

	@EmbeddedId
	private PrevencaoId id;
    
	private Date dataPrazo;
    private Date dataEfetuada;
    
    @ManyToOne
    @JoinColumn(name = "endereco_id")
    private Endereco endereco;
 
    @Override
    public int compareTo(Prevencao o) {
        //ordena por menor prazo
        return this.dataPrazo.compareTo(o.dataPrazo);
    }

    public boolean isAtrasada() {
        if (this.dataEfetuada == null && this.dataPrazo.before(new Date())) {
            return true;
        } else {
            return false;
        }
    }
    
	public Integer getMesDataPrazo() {
		Calendar calendar = Calendar.getInstance();
		calendar.setTime(this.dataPrazo);
		
		return calendar.get(Calendar.MONTH);
	}
}
