# MASK
  MASCARAS em js para: CPF, CNPJ, RG, TELEFONE, MOEDA E CEP

# O QUE VOU PRECISAR NA PÁGINA: 
      <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script> // NA PÁGINA QUER APLICAR
      <script src="{{ asset('assets/js/mask.js') }}" defer></script>      // NA PÁGINA QUER APLICAR   
      
# NO INPUT:
  Use a "class" que você precisa (no exemplo abaixo usei *class="form-control telefone"* e é obrigatório o *oninput="aplicarMascara(event)"* para "chamar a mascara".
  
  Exemplo php com Laravel:
  
    <input type="text" class="form-control telefone" name="telefone" id="telefone" placeholder="Digite o telefone" 
    value="{{ old('telefone') }}" oninput="aplicarMascara(event)" maxLength="15">

  Outras classes para usar:

    cpf;
    cnpj;
    telefone;
    moeda;
    cep;
    rg;
