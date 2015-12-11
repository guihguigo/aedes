package br.com.aedes.domain.model;

import java.io.Serializable;
import java.util.Calendar;
import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@ToString
@EqualsAndHashCode
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Prevencao implements Comparable<Prevencao>, Serializable{
	private static final long serialVersionUID = 2294204926764998765L;

	@EmbeddedId
	@Getter @Setter
	private PrevencaoId id;
    
	@Setter @Getter
	private Date dataPrazo;
    
	@Setter
	private Date dataEfetuada;
    
    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "endereco_id")
    @Setter
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
    
    /**
     * Retorna o mês do prazo
     * @return mês 
     */
	public Integer getMesDataPrazo() {
		Calendar calendar = Calendar.getInstance();
		calendar.setTime(this.dataPrazo);
		
		return calendar.get(Calendar.MONTH);
	}
	
  public static class PrevencaoBuilder {
    public PrevencaoBuilder id(Long codigoCelular, Foco foco, Date dataCriacao) {
      this.id = new PrevencaoId(codigoCelular, foco, dataCriacao);
      return this;
    }

    public PrevencaoBuilder id(PrevencaoId id) {
      this.id = id;
      return this;
    }
  }
}
