import styled from 'styled-components'

export const Styles = styled.div`
  padding: 1rem;

  table {
    width: 100%;
    border-spacing: 0;
    border: 1px solid ${'#e5e5e5'};

    thead, tbody, tfoot {
        border-bottom: 1px solid ${'#e5e5e5'};
    };

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid ${'#e5e5e5'};
      border-right: 1px solid ${'#e5e5e5'};

      :last-child {
        border-right: 0;
      }
    }

    .selectionColumn {
        width: 23px;
    };

  }

   .pagination {
        padding-top: 15px;
    };
`;
